class Connection {
    constructor(id,creator,
                type_of_con_1,position_type_1,position_1,
                type_of_con_2,position_type_2,position_2) {
        this.id = id;
        this.title = undefined;
        this.creator = creator;
        this.last_editor = creator;

        this.type_of_con_1 = type_of_con_1;
        this.position_type_1 = position_type_1;
        this.position_1 = position_1;

        this.type_of_con_2 = type_of_con_2;
        this.position_type_2 = position_type_2;
        this.position_2 = position_2;

        this.settings = undefined;
        this.expanded_body = undefined;
    }
}