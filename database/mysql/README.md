# Overview
This section lists some common practice for MySQL management.

# MySQL Docker Compose
```yaml
version: '3.8'

services:
  mysql:
    image: mysql:latest
    container_name: mysql-wolf
    environment:
      MYSQL_ROOT_PASSWORD: <root password>
      MYSQL_USER: <a default user rather than root>
      MYSQL_PASSWORD: <the password for this user>
    volumes:
      - wolf_mysql_data:/var/lib/mysql
    ports:
      - "3306:3306"

volumes:
  wolf_mysql_data:
    driver: local
```

To launch this MySQL service, simply ```docker-compose up -d```

# Enter
1. Enter the container   
```docker exec -it mysql```

2. Inside the container, launch MySQL process  
```mysql -u<username> -p``` and then enter password

# Manipulation
1. List all users (in mysql.user table)  
```SELECT user, host FROM mysql.user;```

2. Create user  
```CREATE USER '<username>'@'localhost' IDENTIFIED BY '<password>';```  
```CREATE USER '<username>'@'%' IDENTIFIED BY '<password>';```

3. Change user password  
```ALTER USER '<username>'@'localhost' IDENTIFIED BY '<newpassword>';```  

4. Grant database privileges to user    
```GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';```  

5. List databases   
```SHOW DATABASES;```  

6. Create a database   
```CREATE DATABASE xxx;```  

7. Select a database   
```USE xxx;```  

8. List all tables in current database   
```SHOW TABLES;```  

9. Check the DDL of tables  

# Further
1. List all columns of a table  
```sql
SELECT COLUMN_NAME 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE TABLE_NAME = 'your_table_name';
```

2. List all table names containing XXX  
```sql
SELECT TABLE_NAME 
FROM INFORMATION_SCHEMA.TABLES 
WHERE TABLE_NAME LIKE '%XXX%';
```

3. List all table whose columns containing XXX  
```sql
SELECT DISTINCT TABLE_NAME 
FROM INFORMATION_SCHEMA.COLUMNS 
WHERE COLUMN_NAME LIKE '%XXX%';
```

# Further More
- Reset root password  
1. Stop the current container with ```docker-compose down``` or ```docker stop xxx```
2. Start the mysql container in safe mode ```docker-compose run --rm mysql --skip-grant-tables --skip-networking```
3. Enter the container and connect to MySQL with root
4. Switch to the default database ```USE mysql;```
5. Update the root password: ```ALTER USER 'root'@'localhost' IDENTIFIED BY '<new_password>';```
6. Apply the change ```FLUSH PRIVILEGES;```
6. Exit and restart the original container ```exit```
