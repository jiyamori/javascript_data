// //objects inside array

// const users=[
//     {userId: '1', firstName: 'jiya',gender:'female' },
//     {userId: '2', firstName: 'payal',gender:'female' },
//     {userId: '3', firstName: 'mohil',gender:'male' }
// ]

// console.log(users);

// for(let user of users){
//     // console.log(user);
//     console.log(user.userId);
// }

//nested destructuring

const users=[
        {userId: '1', firstName: 'jiya',gender:'female' },
        {userId: '2', firstName: 'payal',gender:'female' },
        {userId: '3', firstName: 'mohil',gender:'male' }
    ]

    // const[user1, user2, user3]=users;
    // console.log(user1);

    const[{userId:change}, , {gender}] = users;
    console.log(change);
    console.log(gender);