CREATE PROCEDURE solution()
BEGIN
	select
		id,
		(scholarship / 12) as "scholarship"
	from scholarships; 
END
