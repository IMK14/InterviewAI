const javaQuestions = {
  Easy: [
    {
      question: "What is Java?",
      answer: "Java is an object-oriented programming language.",
      keywords: ["java","object oriented","language"],
      marks: 10
    },
    {
      question: "What is JVM?",
      answer: "JVM stands for Java Virtual Machine.",
      keywords: ["JVM","virtual machine"],
      marks: 10
    },
    {
      question: "What is JDK?",
      answer: "JDK is Java Development Kit.",
      keywords: ["JDK","development"],
      marks: 10
    },
    {
      question: "Difference between JDK and JRE?",
      answer: "JDK is for development while JRE runs Java programs.",
      keywords: ["JDK","JRE"],
      marks: 10
    },
    {
      question: "What is a class?",
      answer: "A class is a blueprint for objects.",
      keywords: ["class","object"],
      marks: 10
    },
    {
      question: "What is an object?",
      answer: "An object is an instance of a class.",
      keywords: ["instance","class"],
      marks: 10
    },
    {
      question: "Explain inheritance.",
      answer: "Inheritance allows one class to acquire another class properties.",
      keywords: ["inheritance"],
      marks: 10
    },
    {
      question: "Explain encapsulation.",
      answer: "Encapsulation binds data and methods together.",
      keywords: ["encapsulation"],
      marks: 10
    },
    {
      question: "Explain polymorphism.",
      answer: "Polymorphism allows one interface with many implementations.",
      keywords: ["polymorphism"],
      marks: 10
    },
    {
      question: "Explain abstraction.",
      answer: "Abstraction hides implementation details.",
      keywords: ["abstraction"],
      marks: 10
    }
  ],

  Medium: [
    {
      question: "What is method overloading?",
      answer: "Multiple methods with same name but different parameters.",
      keywords: ["overloading"],
      marks: 10
    },
    {
      question: "What is method overriding?",
      answer: "Subclass provides its own implementation.",
      keywords: ["overriding"],
      marks: 10
    },
    {
      question: "Explain interfaces.",
      answer: "Interfaces define methods without implementation.",
      keywords: ["interface"],
      marks: 10
    },
    {
      question: "Explain abstract classes.",
      answer: "Abstract class cannot be instantiated.",
      keywords: ["abstract"],
      marks: 10
    },
    {
      question: "What is exception handling?",
      answer: "It handles runtime errors.",
      keywords: ["exception"],
      marks: 10
    },
    {
      question: "What is multithreading?",
      answer: "Multiple threads execute simultaneously.",
      keywords: ["thread"],
      marks: 10
    },
    {
      question: "Explain collections.",
      answer: "Collections store groups of objects.",
      keywords: ["collection"],
      marks: 10
    },
    {
      question: "Difference between ArrayList and LinkedList?",
      answer: "ArrayList is array based while LinkedList uses nodes.",
      keywords: ["arraylist","linkedlist"],
      marks: 10
    },
    {
      question: "Explain HashMap.",
      answer: "HashMap stores key-value pairs.",
      keywords: ["hashmap"],
      marks: 10
    },
    {
      question: "What is garbage collection?",
      answer: "Garbage collector removes unused objects.",
      keywords: ["garbage"],
      marks: 10
    }
  ],

  Hard: [
    {
      question: "Explain Java Streams API.",
      answer: "Streams process collections efficiently.",
      keywords: ["stream"],
      marks: 10
    },
    {
      question: "Explain synchronization.",
      answer: "Synchronization prevents concurrent access issues.",
      keywords: ["synchronization"],
      marks: 10
    },
    {
      question: "What is reflection?",
      answer: "Reflection inspects classes during runtime.",
      keywords: ["reflection"],
      marks: 10
    },
    {
      question: "Explain serialization.",
      answer: "Serialization converts objects into bytes.",
      keywords: ["serialization"],
      marks: 10
    },
    {
      question: "What are lambda expressions?",
      answer: "Lambda expressions provide functional programming support.",
      keywords: ["lambda"],
      marks: 10
    },
    {
      question: "Explain functional interfaces.",
      answer: "Functional interface has one abstract method.",
      keywords: ["functional interface"],
      marks: 10
    },
    {
      question: "Difference between == and equals()?",
      answer: "== compares references while equals compares content.",
      keywords: ["equals"],
      marks: 10
    },
    {
      question: "Explain ConcurrentHashMap.",
      answer: "ConcurrentHashMap supports thread-safe operations.",
      keywords: ["concurrenthashmap"],
      marks: 10
    },
    {
      question: "What is dependency injection?",
      answer: "Dependency injection provides required objects externally.",
      keywords: ["dependency injection"],
      marks: 10
    },
    {
      question: "Explain Spring Framework.",
      answer: "Spring simplifies enterprise Java development.",
      keywords: ["spring"],
      marks: 10
    }
  ]
};

export default javaQuestions;