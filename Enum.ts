enum RType {
    SUCCESS,
    FAILURE,
    UNAUTHORIZED,
    NOT_FOUND,
    FORBIDDEN
}

interface AResponse<T> {
    status: number;
    type: RType;
    data: T;
}

const response2: AResponse<object> = {
    status: 200,
    type: RType.NOT_FOUND,   
    data: {
        name: 'Sakib',
        age: 35,
        country: 'Bangladesh',
    },
}

console.log(response2)