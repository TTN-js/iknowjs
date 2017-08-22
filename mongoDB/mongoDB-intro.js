/*

========== MongoDB ==========

========== What is a Data ==========
Data can be considered as facts related to any object incosideration. 
ex. Name, Age, Height, Weight, Images and Files

========== What is a Database ==========
Databases are systematic collections of data. Can also be known as data stores.

========== What is SQL ==========
Relational Model is a type of database management system which defines database relationships in forms of tables aka relations.

Structured Query Language (SQL) is the standard language for dealing with relational database. Used to Insert, Search, Update, and Delete database records. 

Relational databases are known as SQL databases because they are written in SQL.
It is the more rigid structured way of storing data. 
Will usally consists of two or more tables with columns and rows. 
Each row represents an entry, and each column sorts very specific information. 
The relationship between tables and fields types is call a schema. 
Schema must be clearly defined before a row can be added. 
This gives excellent organization but compromises flexability. 


========== What is NoSQL ==========
Non-relational DB are used when you're dealing with massive amounts of unstructured data. This type of DB offers greater flexibility. 

Think of non-relational databases as file folders, assembling related information of all types. This type of DB is known as schema-less. 

NoSQL stands for "Not only SQL", and allows you to treat data more flexibily. Instead of tables, this type of DB is document-oriented. This way, non-structured data (articles, photos, socialmedia data, videos, and content withing a post) can be stored in a single document. This does require more processing effort and storage. 

Common types of NoSQL DBs
	- key-value model: stores data in a schema-less way that consists of indexed keys and values
	- column store: stores data tables as columns rather than rows. 
	- document DB: key-value and a bag of chips. each document has its own data and unique key. great for storing, retrieving and managing data.
	- graph database - black magic... data that's interconnected and best represented as a graph?

========== SQL vs NoSQL ==========
Differences can be found in how DBs are build, type of information they store, and how the DB stores the data. 

Relational (SQL) databases utilize tables to organize structured data fields into defined columns.

Need to define schema prior to using
Rigid in structure
Harder to scale quickly
Excellent orginization
Compromises flexability

Why use SQL?
	- Need ACID compliancey (automicity, consistency, isolation, durability). This protects the integrity of your DB by prescribing exactly how transations interact with the database. 
	- Your data is structured and unchanging: 
	If your business is not experiencing massive growth requiring more servers and you're only dealing with consistent data. 

VS
Non-relational (NoSQL) databases store data in a single document file. 

processing speed and scalability are a plus
requires more processing effort
requires more storage
no need to define data types 

Why use NoSQL? 
	- Data isn't the bottleneck
	- Dealling with big data
	- Allows storing of large columes of data that often have no structure. 
	- Making the most of cloud computing and storage
	- Allows rapid development - Agile sprints! because NoSQL data doesn't need to be prepped ahead of time.

========== What is MongoDB? ==========
The most popular NoSQL system. Document-oriented with json-like documents in synamic schemas instead of relational tables. Used in MEAN stack. Pretty similar to JSON in terms of structure. 

MongoDB store collections with documents of data. 

MongoDB is composed of multiple collections
Collections are composed multiple documents
Documents are composed of multiple fields BSON (JSON-like key:value pairs)


*/