CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR (120),
    last_name VARCHAR (120),
    title VARCHAR (120),
    salary int,
    is_active boolean
);

INSERT INTO employees (first_name, last_name, title, salary, is_active) 
VALUES ('Buddy', 'Wakefield', 'word speaker', 41213, 'true'), 
('David', 'Sheldon', 'Author', 86218, 'true'),
('Michael', 'Larson', 'dearly departed', 96225, 'false'),
('Sean', 'Daley', 'slug', 60105, 'true'),
('Aaron', 'Yates', 'technician', 51284, 'true');

