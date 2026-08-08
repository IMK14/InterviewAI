const dbmsQuestions = {
  Easy: [
    {
      question: "What is DBMS?",
      answer: "A Database Management System is software used to create, manage and manipulate databases.",
      keywords: ["database", "manage", "data", "software"],
      marks: 10,
    },
    {
      question: "What is a database?",
      answer: "A database is an organized collection of related data.",
      keywords: ["collection", "data", "organized"],
      marks: 10,
    },
    {
      question: "What is SQL?",
      answer: "SQL is the Structured Query Language used to manage relational databases.",
      keywords: ["SQL", "query", "database"],
      marks: 10,
    },
    {
      question: "What is a primary key?",
      answer: "A primary key uniquely identifies each record in a table.",
      keywords: ["primary key", "unique", "record"],
      marks: 10,
    },
    {
      question: "What is a foreign key?",
      answer: "A foreign key links one table to another using a primary key.",
      keywords: ["foreign key", "relation", "primary key"],
      marks: 10,
    },
    {
      question: "What is normalization?",
      answer: "Normalization reduces redundancy and improves database design.",
      keywords: ["normalization", "redundancy"],
      marks: 10,
    },
    {
      question: "What is a table?",
      answer: "A table stores data in rows and columns.",
      keywords: ["rows", "columns"],
      marks: 10,
    },
    {
      question: "What is a row in DBMS?",
      answer: "A row represents one record in a table.",
      keywords: ["record", "row"],
      marks: 10,
    },
    {
      question: "What is a column?",
      answer: "A column represents an attribute of data.",
      keywords: ["attribute", "column"],
      marks: 10,
    },
    {
      question: "Difference between DBMS and RDBMS?",
      answer: "RDBMS stores data in related tables while DBMS may not.",
      keywords: ["RDBMS", "tables", "relation"],
      marks: 10,
    },
  ],

  Medium: [
    {
      question: "Explain ACID properties.",
      answer: "Atomicity, Consistency, Isolation and Durability.",
      keywords: ["atomicity", "consistency", "isolation", "durability"],
      marks: 10,
    },
    {
      question: "What is indexing?",
      answer: "Indexing improves data retrieval speed.",
      keywords: ["index", "search", "speed"],
      marks: 10,
    },
    {
      question: "What is a view?",
      answer: "A view is a virtual table based on SQL queries.",
      keywords: ["view", "virtual table"],
      marks: 10,
    },
    {
      question: "What is a trigger?",
      answer: "A trigger executes automatically when database events occur.",
      keywords: ["trigger", "automatic"],
      marks: 10,
    },
    {
      question: "Explain joins.",
      answer: "Joins combine rows from multiple tables.",
      keywords: ["join", "tables"],
      marks: 10,
    },
    {
      question: "What is a transaction?",
      answer: "A transaction is a sequence of operations executed as one unit.",
      keywords: ["transaction"],
      marks: 10,
    },
    {
      question: "What is concurrency control?",
      answer: "Concurrency control manages simultaneous transactions.",
      keywords: ["concurrency", "transactions"],
      marks: 10,
    },
    {
      question: "What is denormalization?",
      answer: "Denormalization improves performance by reducing joins.",
      keywords: ["denormalization", "performance"],
      marks: 10,
    },
    {
      question: "What is a clustered index?",
      answer: "A clustered index stores data physically in index order.",
      keywords: ["clustered index"],
      marks: 10,
    },
    {
      question: "Explain referential integrity.",
      answer: "Referential integrity maintains valid relationships between tables.",
      keywords: ["referential integrity"],
      marks: 10,
    },
  ],

  Hard: [
    {
      question: "Explain B+ Tree indexing.",
      answer: "B+ Trees are balanced tree structures used for efficient indexing.",
      keywords: ["B+ Tree", "index"],
      marks: 10,
    },
    {
      question: "Explain deadlock.",
      answer: "Deadlock occurs when transactions wait indefinitely for resources.",
      keywords: ["deadlock"],
      marks: 10,
    },
    {
      question: "What is two-phase locking?",
      answer: "It ensures serializability using growing and shrinking phases.",
      keywords: ["two-phase locking"],
      marks: 10,
    },
    {
      question: "Explain query optimization.",
      answer: "Query optimization selects the most efficient execution plan.",
      keywords: ["optimization", "query"],
      marks: 10,
    },
    {
      question: "What is RAID?",
      answer: "RAID combines multiple disks for performance and reliability.",
      keywords: ["RAID"],
      marks: 10,
    },
    {
      question: "Explain distributed databases.",
      answer: "Distributed databases store data across multiple locations.",
      keywords: ["distributed database"],
      marks: 10,
    },
    {
      question: "What is sharding?",
      answer: "Sharding partitions data across multiple servers.",
      keywords: ["sharding"],
      marks: 10,
    },
    {
      question: "Explain CAP theorem.",
      answer: "CAP states that distributed systems can only guarantee two of Consistency, Availability and Partition Tolerance.",
      keywords: ["CAP theorem"],
      marks: 10,
    },
    {
      question: "What is database replication?",
      answer: "Replication copies data between databases for availability.",
      keywords: ["replication"],
      marks: 10,
    },
    {
      question: "Explain NoSQL databases.",
      answer: "NoSQL databases are non-relational databases designed for scalability.",
      keywords: ["NoSQL"],
      marks: 10,
    },
  ],
};

export default dbmsQuestions;