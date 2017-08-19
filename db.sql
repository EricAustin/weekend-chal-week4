CREATE TABLE employees (
    id SERIAL PRIMARY KEY,
    first_name character varying(120),
    last_name character varying(120),
    salary int,
    is_active boolean
);

INSERT INTO employees (first_name, last_name, salary) VALUES ('Buddy', 'Wakefield', 41213), ('David', 'Sheldon', 86218),('Michael', 'Larson', 96225),('Sean', 'Daley', 60105),('Aaron', 'Yates', 51284);
