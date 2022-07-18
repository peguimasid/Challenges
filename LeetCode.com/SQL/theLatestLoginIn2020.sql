select
  user_id,
  MAX(time_stamp) as "last_stamp"
from Logins where extract(year from time_stamp) = 2020
group by user_id