type Props ={
    name: String;
    avatar: String;
    roles: String[];
    address: String; //? = parametro Opcional
    Phone: String; //? = parametro Opcional
}

export const Person = (props: Props) => {
    return(
        <>
        Nome: {props.name}
        <br/>
        Avatar: {props.avatar}
        <br/>
        Phone: {props.Phone}
        <br/>
        Roles: {props.roles}
        <br/>
        Address: {props.address}    
        </>
    )

    
}