
export interface AuthorInput{
    name ? : null | string;
    book_id ? : null | number;
    phone_number ? : null | string;
    profile_picture ? : null | string;
    sex ? : null | string;
    email ? : null | string;
}

export interface Auhtor{
    id ? : number;
    name ? : string;
    book_id ? : number;
    phone_number ? : string;
    profile_picture ? : string;
    sex ? : string;
    email ? : string;
}