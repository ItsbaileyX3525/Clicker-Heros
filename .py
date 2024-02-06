events = [["05/02/2023","WS2","Window",38],["05/02/2023","MS1","Motion",2],["06/02/2023","DS3","Door",1],["06/02/2023","MS2","Motion",3],["06/02/2023","MS1","Motion",2],["07/02/2023","WS1","Window",24],["07/02/2023","DS1","Door",1]]

total = 0

RDate = input("Enter a date")
for i in range(0, len(events)-1):
    if RDate == events[i, 0]:
        total += events[i, 3]

print("sensors active for"+total+"seconds on"+RDate)