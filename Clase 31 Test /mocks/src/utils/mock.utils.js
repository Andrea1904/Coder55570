import { faker} from '@faker-js/faker'

export const generateProduct =()=>{
    return{
        id: faker.database.mongodbObjectId(),
        title: faker.commerce.product(),
        price: faker.commerce.price(),
        departament: faker.commerce.department(),
        stock: faker.string.numeric(5),
        image: faker.image.avatarGitHub()
    }
}

export const generateUser= ()=>{
    const totalProducts =  faker.string.numeric()
    const products = Array.from ({ length: totalProducts},()=>generateProduct())

    return {
        id: faker.database.mongodbObjectId(),
        name: faker.person.firstName(),
        fullName:  faker.person.fullName(),
        email: faker.internet.email(),
        birthDate : faker.date.birthdate(),
        products,
    }
}
