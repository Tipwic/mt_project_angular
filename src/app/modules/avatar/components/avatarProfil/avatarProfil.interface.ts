export interface AvatarProfil {
    id: Number;
    id_user: Number;
    portrait_url: String;
    name: String;
    nick_name: String,
    biography: Array<any>,

    guild: {
        id: Number,
        name: String,
        bannier_url: String,
    }
    grade: {
        name: String,
        grants: String
    }
    game: {
        id: Number,
        name: String,
        bannier_url: String,
    }
}