let obj = {
    data: [],
    addData(text){
        this.data.push(text)
    },
    ShowData(){
        this.data.map(item=>{
         console.log(item)
        })
    }
}

const start = ()=>{
    let user = +prompt('Введите 1 если вы студент и желаете пройти опрос:\nВведите 2 для просмотра массива');
    switch (user){
        case 1:
            let obj2 = {
                student: {
                    firstName: prompt('Ваше имя'),
                    lastName: prompt('Ваша Фамилия'),
                    pathname: prompt('Ваше отчество'),
                },
                male: {
                    male: prompt('Ваш пол'),
                    national: prompt('Национальная принадлежность'),

                },
                HW: {
                    height: prompt('Рост'),
                    weight: prompt('Вес'),
                },
                birthday: {
                    day: prompt('День важего рождения'),
                    month: prompt('Месяц важего рождения'),
                    year: prompt('Год важего рождения'),
                },
                number: {
                    number: prompt('Ваш номер телефона'),
                },
                home: {
                    index: prompt('Индекс вашего места проживания'),
                    country: prompt('Страна'),
                    region: prompt('Область'),
                    city: prompt('Город'),
                    street: prompt('Улица'),
                    home: prompt('Дом'),
                    apartment: prompt('Квартира')
                },
                education: {
                    education: prompt('Место вашего обучения'),
                    well: prompt('Курс обучения'),
                    group: prompt('Номер группы'),
                    average: prompt('средний балл за аттестат'),
                    speciality: prompt('Специальность'),
                },
            }
            console.log(obj2)
            break;
        case 2:
            obj.ShowData()
            start()
            break;
    }
}
alert()
start()