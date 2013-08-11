@@classes = { "w" => "Wall",
    "." => "Floor",
    "c" => "Chest",
    "d" => "Door",
    "fp" => "Fireplace",
    "/" => "Empty",
    "*" => "Player",

    "Msk" => "Skeleton",
    "Msp" => "Spider"
  }

def process_layer(str)
  return nil if str.nil? or str.empty?

  args = str.split(":")

  item = args[0]
  params = args.slice(1..-1)

  p "ERROR: unknown map code -> #{item}" unless @@classes.has_key? item

  { :klass => @@classes[item], :args => params.map{|p| "\"#{p}\""}.join(",") }
end

out = File.open(ARGV[1], "w")

data = []

File.open(ARGV[0]) do |f|
  f.readlines.each do |line|

    row = []
    #p "ROW: #{line}\n"
    line.rstrip().split("\t").each do |cell|

      #p "CELL: #{cell}\n"

      # layers separted by |
      layers = cell.split("|")

      pl0 = process_layer(layers[0]) || { :klass => @@classes["/"], :args => "" }
      pl1 = process_layer(layers[1]) 

      if pl0[:klass] == "Wall"
        pl0, pl1 = [ pl1, pl0 ]
      end

      # type and params separated by :
      unless pl0.nil? || pl1.nil?
        row << "new MapNode( new #{pl0[:klass]}(#{pl0[:args]}), new #{pl1[:klass]}(#{pl1[:args]}) )"
      else
        row << "new MapNode( null, new #{pl1[:klass]}(#{pl1[:args]}) )" if pl0.nil?
        row << "new MapNode( new #{pl0[:klass]}(#{pl0[:args]}), null )" if pl1.nil?
      end

    end

    data << "[ #{row.join(',')} ]"

  end
end

out.write "var mapData = [ #{data.join(",\n")} ];"
out.close