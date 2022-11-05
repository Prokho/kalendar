from django.db import models
from django.contrib.auth.models import User
from datetime import datetime
import secrets



class Time_slot(models.Model):
    user = models.ForeignKey(User, on_delete=models.RESTRICT)
    date = models.DateField() # дата возможной записи для потенциальных клиентов
    time = models.TimeField() # время возможной записи для потенциальных клиентов
    create_date = models.DateTimeField() # дата и время когда психолог сделал слот доступным
    free_time = models.BooleanField(blank=True, default=False)

    # для time_slot:
    # юзер не заблокирован и имеет роль специалист - для этого нужно запросить список групп и проверить что юзер принадлежит этой группе по соответствующемк ай ди.
    # ремувинг дейт - пользователь не может сам вносить данные в это поле. Поле заполняется автоматически после удаления тайм слота
    # дата должна проверяться на корректность - не младше текущей и не старше чем на 3 месяца вперед
    # минуты должны быть кратны 5-ти
    # пользователь не может создать несколько записей на одно и то же дату и время
    # новый тайм слот не пересекается с уже существующим тайм слотом (как с началом, так и концом), таймслот - берем основу на час

class Appointment(models.Model):
    time_slot = models.ForeignKey(Time_slot, on_delete=models.RESTRICT)
    time_appointment_create = models.DateTimeField(default=datetime.now())
    time_appointment_delete = models.DateTimeField(null=True, blank=True, default=None)
    description_client = models.TextField(null=True, blank=True, default=None)
    client_phone_number = models.CharField(max_length=20)
    client_name = models.CharField(max_length=50)
    token = models.CharField(max_length= 200, default=secrets.token_urlsafe())

    # для appointment:
    # клиент не заблокирован и имеет правильную роль - сделано
    # специалист не заблокирован и имеет правильную роль - сделано
    # проверить что клиент принадлежит к группе клиентов, а специалист принадлежит к группе специалистов - сделано
    # time_slot сейчас свободен и принадлежит тому же самому психологу (передается ай ди)
    # time_slot: пользователь не может создать несколько записей на одно и то же дату и время, должны проверяться дата и время для записи клиента
    # time_appointment_delet - пользователь не может сам вносить данные в это поле. Поле заполняется автоматически после удаления тайм слота

class User_profile(models.Model):
     user = models.ForeignKey(User, on_delete=models.RESTRICT)
     path_photo = models.CharField(max_length=200)
     time_slot_duration = models.PositiveIntegerField()
     minimal_time_start = models.TimeField()
     count_session_per_day = models.PositiveIntegerField()

class Phone_validation(models.Model):
    phone_number = models.CharField(max_length=20)
    validation_code = models.IntegerField()





