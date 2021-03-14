export interface Item {
  id: string;
  color: string;
  rotation: number;
  x: number;
  y: number;
  width: number;
  height: number;
}

export interface Project {
  id: string;
  project: {
    width: number;
    height: number;
    name: string;
    items: [Item];
  };
}

export interface ProjectProps {
  project: Project;
}

export interface ItemProps {
  item: Item;
  scale: {
    X: number;
    Y: number;
  };
}
