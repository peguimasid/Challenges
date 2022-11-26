select
  firstName,
  lastName,
  city,
  state
from Person
left join Address as ad on ad.personId = Person.personId