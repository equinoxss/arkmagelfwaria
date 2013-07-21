var mapData = [ [ new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Door("v","c") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Door("v","c") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Skeleton("1") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Skeleton("1") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), new Door("h","c") ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( new Door(), null ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), new Skeleton("1") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Skeleton("1") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Chest("K") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), new Chest("c","G*2") ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Door("v","c") ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Chest("c","G") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), new Fireplace("hd") ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Door("v","c") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Empty(), null ),new MapNode( new Floor(), new Chest("c","K") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), new Door("h","c") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall("hd") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Chest("c","G*2") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), new Skeleton("2") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall("hd") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Spider("1") ),new MapNode( new Floor(), new Spider("1") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Door("v","c") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), new Chest("c","G","3") ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( new Empty(), null ),new MapNode( null, new Wall() ),new MapNode( new Floor(), new Skeleton("2") ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( new Floor(), null ),new MapNode( null, new Wall() ) ],
[ new MapNode( null, new Wall() ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall("l") ),new MapNode( null, new Wall() ) ] ];