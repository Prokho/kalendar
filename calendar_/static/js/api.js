function API()
{
    this.getListSpecialist = function(successHandler, failHandler)
    {
        let list = [ {name:"oleg", specialist_id:1, "photo":"img/specialist_photo/1.jpg"}, {name:"ivan", specialist_id:2, "photo":"img/specialist_photo/2.jpg"}];
        successHandler(list);
    }

    this.getCalendarSpecialist = function(specialist_id, successHandler, failHandler)
    {
        let listDate = ["2023-02-12","2023-02-19","2023-02-21","2023-04-20", "2023-05-20", "2023-05-01", "2023-05-02"];
        successHandler(listDate);
    }

    this.getTimeSlotBySpecialistIdAndDate = function(specialist_id, date, successHandler, failHandler)
    {
        listTimeslot = [
            {
                "id": 14,
                "user": {
                    "specialist_id": 1,
                    "photo": "222222222222",
                    "name": "Petr Novikov"
                },
                "date": "2023-03-13",
                "time": "11:40:00",
                "create_date": "2022-12-12T20:30:46Z",
                "free_time": true
            },
            {
                "id": 15,
                "user": {
                    "specialist_id": 1,
                    "photo": "222222222222",
                    "name": "Petr Novikov"
                },
                "date": "2023-03-13",
                "time": "12:40:00",
                "create_date": "2022-12-12T20:30:46Z",
                "free_time": true
            },
            {
                "id": 16,
                "user": {
                    "specialist_id": 1,
                    "photo": "222222222222",
                    "name": "Petr Novikov"
                },
                "date": "2023-03-13",
                "time": "13:40:00",
                "create_date": "2022-12-12T20:30:46Z",
                "free_time": true
            }
        ];
        
        successHandler(listTimeslot);
    }

    this.validatePhone = function(phone, successHandler, failHandler)
    {
        successHandler(true);
    }

    this.apointmentSignUp = function(data, successHandler, failHandler)
    {
        var data =  {
            "id": 3,
            "time_slot": {
                "id": 2,
                "user": {
                    "specialist_id": 1,
                    "photo": "222222222222",
                    "name": "Petr Novikov"
                },
                "date": "2022-05-01",
                "time": "10:53:20",
                "create_date": "2022-07-01T10:53:22Z",
                "free_time": false
            },
            "time_appointment_create": "2022-10-31T19:47:59.341296Z",
            "time_appointment_delete": null,
            "description_client": "eweferererew",
            "client_phone_number": "79067316555",
            "client_name": "Anton",
            "token": "l5T0UF41AuY6RDITy7SrUOTP_bZRSNPfooZDkAUzXJ8"
        };
        successHandler(data);
    }
}
// function API()
// {

//     this.getListSpecialist = function(successHandler, failHandler)
//     {
//         let response = fetch("/specialist/");
//         response.then(r => this.processResponse(r, successHandler, failHandler));
//     }

//     this.showCalendarSpecialist = function(specialist_id, successHandler, failHandler)
//     {
//         let today = new Date().toLocaleDateString('en-CA');
//         let dayAfterThreeMonth = new Date(new Date().setDate(new Date().getDate() + 90)).toLocaleDateString("en-CA");
//         let body = {"begin": today, "end": dayAfterThreeMonth, "specialist_id": specialist_id};
//         let bodyJSON = JSON.stringify(body);
//         let response = fetch('/get_freedate_list/', {
//             method: 'POST',
//             headers: {'Content-Type': 'application/json;charset=utf-8'},
//             body: bodyJSON
//         });
//         response.then(r => processResponse(r, successHandler, failHandler));
//     }

//     this.processResponse = function(response, successHandler, failHandler)
//     {
//         if(!response.ok){
//             failHandler(response.status);
//         }
//         else{
//             response.json().then(successHandler);
//         }
//     }
// }