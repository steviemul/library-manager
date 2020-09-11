FROM mysql:5.7.15

COPY schema.sql /docker-entrypoint-initdb.d/20-schema-ddl.sql
COPY data.sql /docker-entrypoint-initdb.d/30-data.sql
