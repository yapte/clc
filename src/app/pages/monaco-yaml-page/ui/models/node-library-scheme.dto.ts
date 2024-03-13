// TODO: exclude any-datatype
export interface NodeLibrarySchemeDto {
  // TODO: data type
  graph_def_file_schema: Record<string, any>;
  nodes_lib: NodeTypeGroupDto;
  sockets_types: SocketTypeDto[];
  pf_version: string;
  mdk_version: string;
}

export interface NodeTypeGroupDto {
  // id: string; //
  name: string;
  children: NodeTypeGroupDto[];
  items: NodeTypeDto[];
}

export interface NodeTypeDto {
  name: string;
  description: string;
  group: string; // => NodeTypeGroup.name
  schema_path: string;
  sockets: {
    inputs: SocketDto[];
    outputs: SocketDto[];
  };
}

export interface SocketTypeDto {
  name: string;
  description: string;
  group: string;
  base_type: string | null;
}

export interface SocketDto {
  name: string;
  quantity: 'fixed' | 'not-fixed'; // TODO
  type: string; // => SocketType.name
  nodeParameter: null;
  parameter_default: null;
  description: string;
}
