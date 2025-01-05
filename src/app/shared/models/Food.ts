// MÓDULO Food

// Cada vez que se cree un nuevo Food
// el id debe ser de tipo number

// OPCIÓN LARGA
// export class Food{
//     constructor(id:number){
//         this.id=id;
//     }
//     id:number;
// }

// si no queremos que sea obligatorio
//  id?:number

// OPCIÓN CORTA
export class Food{
    id!:number;
    name!:string;
    price!:number;
    tags?:string[];
    favorite:boolean = false;
    stars:number = 0;
    imageUrl!:string;
    origins!:string[];
    cookTime!:string;
}
