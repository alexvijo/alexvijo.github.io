---
layout: post
title:  "Welcome to Jekyll!"
date:   2015-07-01 22:45:35
categories: jekyll update
---
<div class="content_body" data-insert-middle-content="true" data-view="content#body"><p>As a good JavaScript developer, you strive to write clean, healthy, and maintainable code. You solve interesting challenges that, while unique, don’t necessarily require unique solutions. You’ve likely found yourself writing code that looks similar to the solution of an entirely different problem you’ve handled before. You may not know it, but you’ve used a JavaScript <strong>design pattern</strong>. Design patterns are reusable solutions to commonly occurring problems in software design.</p>

<p><img src="https://uploads.toptal.io/blog/image/125783/toptal-blog-image-1522333595770-14ba14a2f6099482fa9189f8764dd5ad.png" alt="The Comprehensive Guide to JavaScript Design Patterns" style="width: 860px;"></p>

<p>During any language’s lifespan, many such reusable solutions are made and tested by a large number of developers from that language’s community. It is because of this combined experience of many developers that such solutions are so useful because they help us write code in an optimized way while at the same time solving the problem at hand.</p>

<p>The main benefits we get from design patterns are the following:</p>

<ul>
  <li><strong>They are proven solutions:</strong> Because design patterns are often used by many developers, you can be certain that they work. And not only that, you can be certain that they were revised multiple times and optimizations were probably implemented.</li>
  <li><strong>They are easily reusable:</strong> Design patterns document a reusable solution which can be modified to solve multiple particular problems, as they are not tied to a specific problem.</li>
  <li><strong>They are expressive:</strong> Design patterns can explain a large solution quite elegantly.</li>
  <li><strong>They ease communication:</strong> When developers are familiar with design patterns, they can more easily communicate with one another about potential solutions to a given problem.</li>
  <li><strong>They prevent the need for refactoring code:</strong> If an application is written with design patterns in mind, it is often the case that you won’t need to refactor the code later on because applying the correct design pattern to a given problem is already an optimal solution.</li>
  <li><strong>They lower the size of the codebase:</strong> Because design patterns are usually elegant and optimal solutions, they usually require less code than other solutions.</li>
</ul>

<p>I know you’re ready to jump in at this point, but before you learn all about design patterns, let’s review some JavaScript basics.</p>

<h2 id="a-brief-history-of-javascript">A Brief History of JavaScript</h2>

<p>JavaScript is one of the most popular programming languages for web development today. It was initially made as a sort of a “glue” for various displayed HTML elements, known as a client-side scripting language, for one of the initial web browsers.  Called Netscape Navigator, it could only display static HTML at the time. As you might assume, the idea of such a scripting language led to browser wars between the big players in the browser development industry back then, such as Netscape Communications (today Mozilla), Microsoft, and others.</p>

<p>Each of the big players wanted to push through their own implementation of this scripting language, so Netscape made JavaScript (actually, Brendan Eich did), Microsoft made JScript, and so forth. As you can image, the differences between these implementations were great, so development for web browsers was made per-browser, with best-viewed-on stickers that came with a web page. It soon became clear that we needed a standard, a cross-browser solution which would unify the development process and simplify the creation of web pages. What they came up with is called <a href="https://www.ecma-international.org/publications/standards/Ecma-262.htm" rel="noopener noreferrer" target="_blank">ECMAScript</a>.</p>

<p>ECMAScript is a standardized scripting language specification which all modern browsers try to support, and there are multiple implementations (you could say dialects) of ECMAScript. The most popular one is the topic of this article, JavaScript. Since its initial release, ECMAScript has standardized a lot of important things, and for those more interested in the specifics, there is a detailed list of standardized items for each version of the ECMAScript available on Wikipedia. Browser support for ECMAScript versions 6 (ES6) and higher are still incomplete and have to be transpiled to ES5 in order to be fully supported.</p>

<h2 id="what-is-javascript">What Is JavaScript?</h2>

<p>In order to fully grasp the contents of this article, let’s make an introduction to some very important language characteristics that we need to be aware of before diving into JavaScript design patterns. If someone were to ask you “What is JavaScript?” you might answer somewhere in the lines of:</p>

<blockquote>
  <p><em>JavaScript is a lightweight, interpreted, object-oriented programming language with first-class functions most commonly known as a scripting language for web pages.</em></p>
</blockquote>

<p>The aforementioned definition means to say that JavaScript code has a low memory footprint, is easy to implement, and easy to learn, with a syntax similar to popular languages such as C++ and Java. It is a scripting language, which means that its code is interpreted instead of compiled. It has support for procedural, object-oriented, and functional programming styles, which makes it very flexible for developers.</p>

<p>So far, we have taken a look at all of the characteristics which sound like many other languages out there, so let’s take a look at what is specific about JavaScript in regard to other languages. I am going to list a few characteristics and give my best shot at explaining why they deserve special attention.</p>

<h3 id="javascript-supports-first-class-functions">JavaScript Supports First-class Functions</h3>

<p>This characteristic used to be troublesome for me to grasp when I was just starting with JavaScript, as I came from a C/C++ background. JavaScript treats functions as first-class citizens, meaning you can pass functions as parameters to other functions just like you would any other variable.</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// we send in the function as an argument to be</span>
<span class="hljs-comment">// executed from inside the calling function</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">performOperation</span>(<span class="hljs-params">a, b, cb</span>) </span>{
    <span class="hljs-keyword">var</span> c = a + b;
    cb(c);
}

performOperation(<span class="hljs-number">2</span>, <span class="hljs-number">3</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">result</span>) </span>{
    <span class="hljs-comment">// prints out 5</span>
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"The result of the operation is "</span> + result);
})
</code></pre>

<h3 id="javascript-is-prototype-based">JavaScript Is Prototype-based</h3>

<p>As is the case with many other object-oriented languages, JavaScript supports objects, and one of the first terms that comes to mind when thinking about objects is classes and inheritance. This is where it gets a little tricky, as the language doesn’t support classes in its plain language form but rather uses something called prototype-based or instance-based inheritance.</p>

<p>It is just now, in ES6, that the formal term <strong>class</strong> is introduced, which means that the browsers still don’t support this (if you remember, as of writing, the last fully supported ECMAScript version is 5.1). It is important to note, however, that even though the term “class” is introduced into JavaScript, it still utilizes prototype-based inheritance under the hood.</p>

<p>Prototype-based programming is a style of object-oriented programming in which behavior reuse (known as inheritance) is performed via a process of reusing existing objects via delegations that serve as prototypes. We will dive into more detail with this once we get to the design patterns section of the article, as this characteristic is used in a lot of JavaScript design patterns.</p>

<h3 id="javascript-event-loops">JavaScript Event Loops</h3>

<p>If you have experience working with JavaScript, you are surely familiar with the term <strong>callback function</strong>. For those not familiar with the term, a callback function is a function sent as a parameter (remember, JavaScript treats functions as first-class citizens) to another function and gets executed after an event fires. This is usually used for subscribing to events such as a mouse click or a keyboard button press.</p>

<p><img src="https://uploads.toptal.io/blog/image/125781/toptal-blog-image-1522333483007-ac9070c74c6ae7747cb2fa551667d8e5.png" alt="Graphic depiction of the JavaScript event loop" style="width: 860px;"></p>

<p>Each time an event, which has a listener attached to it, fires (otherwise the event is lost), a message is being sent to a queue of messages which are being processed synchronously, in a FIFO manner (first-in-first-out). This is called the <strong>event loop</strong>.</p>

<p>Each of the messages on the queue has a function associated with it. Once a message is dequeued, the runtime executes the function completely before processing any other message. This is to say, if a function contains other function calls, they are all performed prior to processing a new message from the queue. This is called run-to-completion.</p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">while</span> (queue.waitForMessage()) {
    queue.processNextMessage();
}
</code></pre>

<p>The <code>queue.waitForMessage()</code> synchronously waits for new messages. Each of the messages being processed has its own stack and is processed until the stack is empty. Once it finishes, a new message is processed from the queue, if there is one.</p>

<p>You might have also heard that JavaScript is non-blocking, meaning that when an asynchronous operation is being performed, the program is able to process other things, such as receiving user input, while waiting for the asynchronous operation to complete, not blocking the main execution thread. This is a very useful property of JavaScript and a whole article could be written just on this topic; however, it is outside of the scope of this article.</p>

<h2 id="what-are-design-patterns">What Are Design Patterns?</h2>

<p>As I said before, design patterns are reusable solutions to commonly occurring problems in software design. Let’s take a look at some of the categories of design patterns.</p>

<h3 id="proto-patterns">Proto-patterns</h3>

<p>How does one create a pattern? Let’s say you recognized a commonly occurring problem, and you have your own unique solution to this problem, which isn’t globally recognized and documented. You use this solution every time you encounter this problem, and you think that it’s reusable and that the developer community could benefit from it.</p>

<p>Does it immediately become a pattern? Luckily, no. Oftentimes, one may have good code writing practices and simply mistake something that looks like a pattern for one when, in fact, it is not a pattern.</p>

<p>How can you know when what you think you recognize is actually a design pattern?</p>

<p>By getting other developers’ opinions about it, by knowing about the process of creating a pattern itself, and by making yourself well acquainted with existing patterns. There is a phase a pattern has to go through before it becomes a full-fledged pattern, and this is called a proto-pattern.</p>

<p>A proto-pattern is a pattern-to-be <em>if</em> it passes a certain period of testing by various developers and scenarios where the pattern proves to be useful and gives correct results. There is quite a large amount of work and documentation—most of which is outside the scope of this article—to be done in order to make a fully-fledged pattern recognized by the community.</p>

<h3 id="anti-patterns">Anti-patterns</h3>

<p>As a design pattern represents good practice, an anti-pattern represents bad practice.</p>

<p>An example of an anti-pattern would be modifying the <code>Object</code> class prototype. Almost all objects in JavaScript inherit from <code>Object</code> (remember that JavaScript uses prototype-based inheritance) so imagine a scenario where you altered this prototype. Changes to the <code>Object</code> prototype would be seen in all of the objects that inherit from this prototype—<strong>which would be <em>most</em> JavaScript objects</strong>. This is a disaster waiting to happen.</p>

<p>Another example, similar to one mentioned above, is modifying objects that you don’t own. An example of this would be overriding a function from an object used in many scenarios throughout the application. If you are working with a large team, imagine the confusion this would cause; you’d quickly run into naming collisions, incompatible implementations, and maintenance nightmares.</p>

<p>Similar to how it is useful to know about all of the good practices and solutions, it is also very important to know about the bad ones too. This way, you can recognize them and avoid making the mistake up front.</p>

<h2 id="design-pattern-categorization">Design Pattern Categorization</h2>

<p>Design patterns can be categorized in multiple ways, but the most popular one is the following:</p>

<ul>
  <li><strong>Creational</strong> design patterns</li>
  <li><strong>Structural</strong> design patterns</li>
  <li><strong>Behavioral</strong> design patterns</li>
  <li><strong>Concurrency</strong> design patterns</li>
  <li><strong>Architectural</strong> design patterns</li>
</ul>

<h3 id="creational-design-patterns">Creational Design Patterns</h3>

<p>These patterns deal with object creation mechanisms which optimize object creation compared to a basic approach. The basic form of object creation could result in design problems or in added complexity to the design. Creational design patterns solve this problem by somehow controlling object creation. Some of the popular design patterns in this category are:</p>

<ul>
  <li>Factory method</li>
  <li>Abstract factory</li>
  <li>Builder</li>
  <li>Prototype</li>
  <li>Singleton</li>
</ul>

<h3 id="structural-design-patterns">Structural Design Patterns</h3>

<p>These patterns deal with object relationships. They ensure that if one part of a system changes, the entire system doesn’t need to change along with it. The most popular patterns in this category are:</p>

<ul>
  <li>Adapter</li>
  <li>Bridge</li>
  <li>Composite</li>
  <li>Decorator</li>
  <li>Facade</li>
  <li>Flyweight</li>
  <li>Proxy</li>
</ul>

<h3 id="behavioral-design-patterns">Behavioral Design Patterns</h3>

<p>These types of patterns recognize, implement, and improve communication between disparate objects in a system. They help ensure that disparate parts of a system have synchronized information. Popular examples of these patterns are:</p>

<ul>
  <li>Chain of responsibility</li>
  <li>Command</li>
  <li>Iterator</li>
  <li>Mediator</li>
  <li>Memento</li>
  <li>Observer</li>
  <li>State</li>
  <li>Strategy</li>
  <li>Visitor</li>
</ul>

<h3 id="concurrency-design-patterns">Concurrency Design Patterns</h3>

<p>These types of design patterns deal with multi-threaded programming paradigms. Some of the popular ones are:</p>

<ul>
  <li>Active object</li>
  <li>Nuclear reaction</li>
  <li>Scheduler</li>
</ul>

<h3 id="architectural-design-patterns">Architectural Design Patterns</h3>

<p>Design patterns which are used for architectural purposes. Some of the most famous ones are:</p>

<ul>
  <li>MVC (Model-View-Controller)</li>
  <li>MVP (Model-View-Presenter)</li>
  <li>MVVM (Model-View-ViewModel)</li>
</ul>

<p>In the following section, we are going to take a closer look at some of the aforementioned design patterns with examples provided for better understanding.</p>

<h2 id="design-pattern-examples">Design Pattern Examples</h2>

<p>Each of the design patterns represents a specific type of solution to a specific type of problem. There is no universal set of patterns that is always the best fit. We need to learn when a particular pattern will prove useful and whether it will provide actual value. Once we are familiar with the patterns and scenarios they are best suited for, we can easily determine whether or not a specific pattern is a good fit for a given problem.</p>

<p>Remember, applying the wrong pattern to a given problem could lead to undesirable effects such as unnecessary code complexity, unnecessary overhead on performance, or even the spawning of a new anti-pattern.</p>

<p>These are all important things to consider when thinking about applying a design pattern to our code. We are going to take a look at some of the design patterns I personally found useful and believe every senior JavaScript developer should be familiar with.</p>

<h3 id="constructor-pattern">Constructor Pattern</h3>

<p>When thinking about classical object-oriented languages, a constructor is a special function in a class which initializes an object with some set of default and/or sent-in values.</p>

<p>Common ways to create objects in JavaScript are the three following ways:</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// either of the following ways can be used to create a new object</span>
<span class="hljs-keyword">var</span> instance = {};
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">var</span> instance = <span class="hljs-built_in">Object</span>.create(<span class="hljs-built_in">Object</span>.prototype);
<span class="hljs-comment">// or</span>
<span class="hljs-keyword">var</span> instance = <span class="hljs-keyword">new</span> <span class="hljs-built_in">Object</span>();
</code></pre>

<p>After creating an object, there are four ways (since ES3) to add properties to these objects. They are the following:</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// supported since ES3</span>
<span class="hljs-comment">// the dot notation</span>
instance.key = <span class="hljs-string">"A key's value"</span>;

<span class="hljs-comment">// the square brackets notation</span>
instance[<span class="hljs-string">"key"</span>] = <span class="hljs-string">"A key's value"</span>;

<span class="hljs-comment">// supported since ES5</span>
<span class="hljs-comment">// setting a single property using Object.defineProperty</span>
<span class="hljs-built_in">Object</span>.defineProperty(instance, <span class="hljs-string">"key"</span>, {
    <span class="hljs-attr">value</span>: <span class="hljs-string">"A key's value"</span>,
    <span class="hljs-attr">writable</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">enumerable</span>: <span class="hljs-literal">true</span>,
    <span class="hljs-attr">configurable</span>: <span class="hljs-literal">true</span>
});

<span class="hljs-comment">// setting multiple properties using Object.defineProperties</span>
<span class="hljs-built_in">Object</span>.defineProperties(instance, {
    <span class="hljs-string">"firstKey"</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">"First key's value"</span>,
        <span class="hljs-attr">writable</span>: <span class="hljs-literal">true</span>
    },
    <span class="hljs-string">"secondKey"</span>: {
        <span class="hljs-attr">value</span>: <span class="hljs-string">"Second key's value"</span>,
        <span class="hljs-attr">writable</span>: <span class="hljs-literal">false</span>
    }
});
</code></pre>

<p>The most popular way to create objects is the curly brackets and, for adding properties, the dot notation or square brackets. Anyone with any experience with JavaScript has used them.</p>

<p>We mentioned earlier that JavaScript doesn’t support native classes, but it does support constructors through the use of a “new” keyword prefixed to a function call. This way, we can use the function as a constructor and initialize its properties the same way we would with a classic language constructor.</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// we define a constructor for Person objects</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age, isDeveloper</span>) </span>{
    <span class="hljs-keyword">this</span>.name = name;
    <span class="hljs-keyword">this</span>.age = age;
    <span class="hljs-keyword">this</span>.isDeveloper = isDeveloper || <span class="hljs-literal">false</span>;

    <span class="hljs-keyword">this</span>.writesCode = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
      <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.isDeveloper? <span class="hljs-string">"This person does write code"</span> : <span class="hljs-string">"This person does not write code"</span>);
    }
}

<span class="hljs-comment">// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode</span>
<span class="hljs-keyword">var</span> person1 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">"Bob"</span>, <span class="hljs-number">38</span>, <span class="hljs-literal">true</span>);
<span class="hljs-comment">// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode</span>
<span class="hljs-keyword">var</span> person2 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">"Alice"</span>, <span class="hljs-number">32</span>);

<span class="hljs-comment">// prints out: This person does write code</span>
person1.writesCode();
<span class="hljs-comment">// prints out: this person does not write code</span>
person2.writesCode();
</code></pre>

<p>However, there is still room for improvement here. If you’ll remember, I mentioned previously that JavaScript uses prototype-based inheritance. The problem with the previous approach is that the method <code>writesCode</code> gets redefined for each of the instances of the <code>Person</code> constructor. We can avoid this by setting the method into the function prototype:</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// we define a constructor for Person objects</span>
<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age, isDeveloper</span>) </span>{
    <span class="hljs-keyword">this</span>.name = name;
    <span class="hljs-keyword">this</span>.age = age;
    <span class="hljs-keyword">this</span>.isDeveloper = isDeveloper || <span class="hljs-literal">false</span>;
}

<span class="hljs-comment">// we extend the function's prototype</span>
Person.prototype.writesCode = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-keyword">this</span>.isDeveloper? <span class="hljs-string">"This person does write code"</span> : <span class="hljs-string">"This person does not write code"</span>);
}

<span class="hljs-comment">// creates a Person instance with properties name: Bob, age: 38, isDeveloper: true and a method writesCode</span>
<span class="hljs-keyword">var</span> person1 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">"Bob"</span>, <span class="hljs-number">38</span>, <span class="hljs-literal">true</span>);
<span class="hljs-comment">// creates a Person instance with properties name: Alice, age: 32, isDeveloper: false and a method writesCode</span>
<span class="hljs-keyword">var</span> person2 = <span class="hljs-keyword">new</span> Person(<span class="hljs-string">"Alice"</span>, <span class="hljs-number">32</span>);

<span class="hljs-comment">// prints out: This person does write code</span>
person1.writesCode();
<span class="hljs-comment">// prints out: this person does not write code</span>
person2.writesCode();
</code></pre>

<p>Now, both instances of the <code>Person</code> constructor can access a shared instance of the <code>writesCode()</code> method.</p>

<h3 id="module-pattern">Module Pattern</h3>

<p>As far as peculiarities go, JavaScript never ceases to amaze. Another peculiar thing to JavaScript (at least as far as object-oriented languages go) is that JavaScript does not support access modifiers. In a classical OOP language, a user defines a class and determines access rights for its members. Since JavaScript in its plain form supports neither classes nor access modifiers, JavaScript developers figured out a way to mimic this behavior when needed.</p>

<p>Before we go into the module pattern specifics, let’s talk about the concept of closure. A <strong>closure</strong> is a function with access to the parent scope, even after the parent function has closed. They help us mimic the behavior of access modifiers through scoping. Let’s show this via an example:</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// we  used an immediately invoked function expression</span>
<span class="hljs-comment">// to create a private variable, counter</span>
<span class="hljs-keyword">var</span> counterIncrementer = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-keyword">var</span> counter = <span class="hljs-number">0</span>;

    <span class="hljs-keyword">return</span> <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> ++counter;
    };
})();

<span class="hljs-comment">// prints out 1</span>
<span class="hljs-built_in">console</span>.log(counterIncrementer());
<span class="hljs-comment">// prints out 2</span>
<span class="hljs-built_in">console</span>.log(counterIncrementer());
<span class="hljs-comment">// prints out 3</span>
<span class="hljs-built_in">console</span>.log(counterIncrementer());
</code></pre>

<p>As you can see, by using the IIFE, we have tied the counter variable to a function which was invoked and closed but can still be accessed by the child function that increments it. Since we cannot access the counter variable from outside of the function expression, we made it private through scoping manipulation.</p>

<p>Using the closures, we can create objects with private and public parts. These are called <strong>modules</strong> and are very useful whenever we want to hide certain parts of an object and only expose an interface to the user of the module. Let’s show this in an example:</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// through the use of a closure we expose an object</span>
<span class="hljs-comment">// as a public API which manages the private objects array</span>
<span class="hljs-keyword">var</span> collection = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// private members</span>
    <span class="hljs-keyword">var</span> objects = [];

    <span class="hljs-comment">// public members</span>
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">addObject</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">object</span>) </span>{
            objects.push(object);
        },
        <span class="hljs-attr">removeObject</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">object</span>) </span>{
            <span class="hljs-keyword">var</span> index = objects.indexOf(object);
            <span class="hljs-keyword">if</span> (index &gt; <span class="hljs-number">0</span>) {
                objects.splice(index, <span class="hljs-number">1</span>);
            }
        },
        <span class="hljs-attr">getObjects</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
            <span class="hljs-keyword">return</span> objects.slice();
        }
    };
})();

collection.addObject(<span class="hljs-string">"Bob"</span>);
collection.addObject(<span class="hljs-string">"Alice"</span>);
collection.addObject(<span class="hljs-string">"Franck"</span>);
<span class="hljs-comment">// prints ["Bob", "Alice", "Franck"]</span>
<span class="hljs-built_in">console</span>.log(collection.getObjects());
collection.removeObject(<span class="hljs-string">"Alice"</span>);
<span class="hljs-comment">// prints ["Bob", "Franck"]</span>
<span class="hljs-built_in">console</span>.log(collection.getObjects());
</code></pre>

<p>The most useful thing that this pattern introduces is the clear separation of private and public parts of an object, which is a concept very similar to developers coming from a classical object-oriented background.</p>

<p>However, not everything is so perfect. When you wish to change the visibility of a member, you need to modify the code wherever you have used this member because of the different nature of accessing public and private parts. Also, methods added to the object after their creation cannot access the private members of the object.</p>

<div class="embeddable_form-wrapper for-post" data-role="blog_subscribe" data-view="blog_subscribe#form"><form action="/blog/subscription" class="embeddable_form" data-entity="blog_subscription" data-remote="" data-view="form#form" method="post"><div class="embeddable_form-step is-email_form is-current"><div class="embeddable_form-row is-label"><div class="embeddable_form-label_title">Like what you're reading?</div><div class="embeddable_form-label">Get the latest updates first.</div></div><div class="embeddable_form-row form-field is-email_field"><input autocomplete="off" class="input is-medium" data-role="email" name="blog_subscription[email]" placeholder="Enter your email address..." type="text"><input name="blog_subscription[vertical]" type="hidden" value="developers"><input name="from_widget" type="hidden" value="true"></div><div class="embeddable_form-row is-submit"><input class="button is-green_candy is-default is-full_width" data-loader-text="Subscribing..." data-role="submit" type="submit" value="Get Exclusive Updates"></div><div class="embeddable_form-row is-privacy"><div class="embeddable_form-privacy"><div class="embeddable_form-privacy_icon"></div><div class="embeddable_form-privacy_text">No spam. Just great engineering posts.</div></div></div></div><div class="embeddable_form-step is-confirmation" data-place="@blog_subscribe" data-role="confirmation"><div class="embeddable_form-row is-label is-success"><div class="embeddable_form-label_title">Like what you're reading?</div><div class="embeddable_form-label">Get the latest updates first.</div></div><div class="embeddable_form-row is-success"><div class="embeddable_form-label is-header">Thank you for subscribing!</div><div class="embeddable_form-label">Check your inbox to confirm subscription. You'll start receiving posts after you confirm.</div></div><div class="embeddable_form-row is-success"><ul class="social_share is-horizontal is-loaded" data-rss-url="https://www.toptal.com/developers/blog.rss" data-url="https://www.toptal.com/developers/blog" data-view="layout#social_share" data-youtube-channel-url="https://www.youtube.com/channel/UCNqm_euTHZz3o5OnKhUS-oA"><li class="social_share-item is-counter" title="Total number of shares"><span class="social_share-item_num" data-role="counter_num">112</span><span class="social_share-item_text" data-role="counter_text">shares</span></li><li class="social_share-item"><a class="social_share-item_link" data-role="link" data-track-click="SocialShareButtonClicked" data-track-default-data="{&quot;network&quot;:&quot;twitter&quot;}" data-type="twitter" title="Share on Twitter"><img class="social_share-item_image" height="50" src="https://assets.toptal.io/assets/front/static/public/primitives/social/share_bar/twitter_83c6d4.png" width="50"></a></li><li class="social_share-item"><a class="social_share-item_link" data-role="link" data-track-click="SocialShareButtonClicked" data-track-default-data="{&quot;network&quot;:&quot;facebook&quot;}" data-type="facebook" title="Share on Facebook"><img class="social_share-item_image" height="50" src="https://assets.toptal.io/assets/front/static/public/primitives/social/share_bar/facebook_dc66c9.png" width="50"></a></li><li class="social_share-item"><a class="social_share-item_link" data-role="link" data-track-click="SocialShareButtonClicked" data-track-default-data="{&quot;network&quot;:&quot;google_plus&quot;}" data-type="google_plus" title="Share on Google Plus"><img class="social_share-item_image" height="50" src="https://assets.toptal.io/assets/front/static/public/primitives/social/share_bar/google_plus_355fb0.png" width="50"></a></li></ul></div></div></form></div><h3 id="revealing-module-pattern">Revealing Module Pattern</h3>

<p>This pattern is an improvement made to the module pattern as illustrated above. The main difference is that we write the entire object logic in the private scope of the module and then simply expose the parts we want to be public by returning an anonymous object. We can also change the naming of private members when mapping private members to their corresponding public members.</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// we write the entire object logic as private members and</span>
<span class="hljs-comment">// expose an anonymous object which maps members we wish to reveal</span>
<span class="hljs-comment">// to their corresponding public members</span>
<span class="hljs-keyword">var</span> namesCollection = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// private members</span>
    <span class="hljs-keyword">var</span> objects = [];

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">addObject</span>(<span class="hljs-params">object</span>) </span>{
        objects.push(object);
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">removeObject</span>(<span class="hljs-params">object</span>) </span>{
        <span class="hljs-keyword">var</span> index = objects.indexOf(object);
        <span class="hljs-keyword">if</span> (index &gt; <span class="hljs-number">0</span>) {
            objects.splice(index, <span class="hljs-number">1</span>);
        }
    }

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">getObjects</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-keyword">return</span> objects.slice();
    }

    <span class="hljs-comment">// public members</span>
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">addName</span>: addObject,
        <span class="hljs-attr">removeName</span>: removeObject,
        <span class="hljs-attr">getNames</span>: getObjects
    };
})();

namesCollection.addName(<span class="hljs-string">"Bob"</span>);
namesCollection.addName(<span class="hljs-string">"Alice"</span>);
namesCollection.addName(<span class="hljs-string">"Franck"</span>);
<span class="hljs-comment">// prints ["Bob", "Alice", "Franck"]</span>
<span class="hljs-built_in">console</span>.log(namesCollection.getNames());
namesCollection.removeName(<span class="hljs-string">"Alice"</span>);
<span class="hljs-comment">// prints ["Bob", "Franck"]</span>
<span class="hljs-built_in">console</span>.log(namesCollection.getNames());
</code></pre>

<p>The most important thing this pattern provides is a more consistent, more easily digestible module (from the perspective of a reader of the code) in comparison with the classic module pattern. A drawback is that we cannot override public members because the functionality is contained within the private function and the public function is only a pointer to the private function, which contains the actual functionality. The classic module pattern doesn’t have this problem, as it exposes the function itself, not a pointer to a function.</p>

<h3 id="singleton-pattern">Singleton Pattern</h3>

<p>The singleton pattern is used in scenarios when we need exactly one instance of a class. For example, we need to have an object which contains some configuration for something. In these cases, it is not necessary to create a new object whenever the configuration object is required somewhere in the system.</p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">var</span> singleton = (<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
    <span class="hljs-comment">// private singleton value which gets initialized only once</span>
    <span class="hljs-keyword">var</span> config;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">initializeConfiguration</span>(<span class="hljs-params">values</span>)</span>{
        <span class="hljs-keyword">this</span>.randomNumber = <span class="hljs-built_in">Math</span>.random();
        values = values || {};
        <span class="hljs-keyword">this</span>.number = values.number || <span class="hljs-number">5</span>;
        <span class="hljs-keyword">this</span>.size = values.size || <span class="hljs-number">10</span>;
    }

    <span class="hljs-comment">// we export the centralized method for retrieving the singleton value</span>
    <span class="hljs-keyword">return</span> {
        <span class="hljs-attr">getConfig</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">values</span>) </span>{
            <span class="hljs-comment">// we initialize the singleton value only once</span>
            <span class="hljs-keyword">if</span> (config === <span class="hljs-literal">undefined</span>) {
                config = <span class="hljs-keyword">new</span> initializeConfiguration(values);
            }

            <span class="hljs-comment">// and return the same config value wherever it is asked for</span>
            <span class="hljs-keyword">return</span> config;
        }
    };
})();

<span class="hljs-keyword">var</span> configObject = singleton.getConfig({ <span class="hljs-string">"size"</span>: <span class="hljs-number">8</span> });
<span class="hljs-comment">// prints number: 5, size: 8, randomNumber: someRandomDecimalValue</span>
<span class="hljs-built_in">console</span>.log(configObject);
<span class="hljs-keyword">var</span> configObject1 = singleton.getConfig({ <span class="hljs-string">"number"</span>: <span class="hljs-number">8</span> });
<span class="hljs-comment">// prints number: 5, size: 8, randomNumber: same randomDecimalValue as in first config</span>
<span class="hljs-built_in">console</span>.log(configObject1);
</code></pre>

<p>As you can see in the example, the random number generated is always the same, as well as the config values sent in.</p>

<p>It is important to note that the access point for retrieving the singleton value needs to be only one and very well known. A downside to using this pattern is that it is rather difficult to test.</p>

<h3 id="observer-pattern">Observer Pattern</h3>

<p>The observer pattern is a very useful tool when we have a scenario where we need to improve the communication between disparate parts of our system in an optimized way. It promotes loose coupling between objects.</p>

<p>There are various versions of this pattern, but in its most basic form, we have two main parts of the pattern. The first is a subject and the second is observers.</p>

<p>A subject handles all of the operations regarding a certain topic that the observers subscribe to. These operations subscribe an observer to a certain topic, unsubscribe an observer from a certain topic, and notify observers about a certain topic when an event is published.</p>

<p>However, there is a variation of this pattern called the publisher/subscriber pattern, which I am going to use as an example in this section. The main difference between a classical observer pattern and the publisher/subscriber pattern is that publisher/subscriber promotes even more loose coupling then the observer pattern does.</p>

<p>In the observer pattern, the subject holds the references to the subscribed observers and calls methods directly from the objects themselves whereas, in the publisher/subscriber pattern, we have channels, which serve as a communication bridge between a subscriber and a publisher. The publisher fires an event and simply executes the callback function sent for that event.</p>

<p>I am going to display a short example of the publisher/subscriber pattern, but for those interested, a classic observer pattern example can be easily found online.</p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">var</span> publisherSubscriber = {};

<span class="hljs-comment">// we send in a container object which will handle the subscriptions and publishings</span>
(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">container</span>) </span>{
    <span class="hljs-comment">// the id represents a unique subscription id to a topic</span>
    <span class="hljs-keyword">var</span> id = <span class="hljs-number">0</span>;

    <span class="hljs-comment">// we subscribe to a specific topic by sending in</span>
    <span class="hljs-comment">// a callback function to be executed on event firing</span>
    container.subscribe = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">topic, f</span>) </span>{
        <span class="hljs-keyword">if</span> (!(topic <span class="hljs-keyword">in</span> container)) {
          container[topic] = [];
        }

        container[topic].push({
            <span class="hljs-string">"id"</span>: ++id,
            <span class="hljs-string">"callback"</span>: f
        });

        <span class="hljs-keyword">return</span> id;
    }

    <span class="hljs-comment">// each subscription has its own unique ID, which we use</span>
    <span class="hljs-comment">// to remove a subscriber from a certain topic</span>
    container.unsubscribe = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">topic, id</span>) </span>{
        <span class="hljs-keyword">var</span> subscribers = [];
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> subscriber <span class="hljs-keyword">of</span> container[topic]) {
            <span class="hljs-keyword">if</span> (subscriber.id !== id) {
                subscribers.push(subscriber);
            }
        }
        container[topic] = subscribers;
    }

    container.publish = <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">topic, data</span>) </span>{
        <span class="hljs-keyword">for</span> (<span class="hljs-keyword">var</span> subscriber <span class="hljs-keyword">of</span> container[topic]) {
            <span class="hljs-comment">// when executing a callback, it is usually helpful to read</span>
            <span class="hljs-comment">// the documentation to know which arguments will be</span>
            <span class="hljs-comment">// passed to our callbacks by the object firing the event</span>
            subscriber.callback(data);
        }
    }

})(publisherSubscriber);

<span class="hljs-keyword">var</span> subscriptionID1 = publisherSubscriber.subscribe(<span class="hljs-string">"mouseClicked"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"I am Bob's callback function for a mouse clicked event and this is my event data: "</span> + <span class="hljs-built_in">JSON</span>.stringify(data));
});

<span class="hljs-keyword">var</span> subscriptionID2 = publisherSubscriber.subscribe(<span class="hljs-string">"mouseHovered"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"I am Bob's callback function for a hovered mouse event and this is my event data: "</span> + <span class="hljs-built_in">JSON</span>.stringify(data));
});

<span class="hljs-keyword">var</span> subscriptionID3 = publisherSubscriber.subscribe(<span class="hljs-string">"mouseClicked"</span>, <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">data</span>) </span>{
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"I am Alice's callback function for a mouse clicked event and this is my event data: "</span> + <span class="hljs-built_in">JSON</span>.stringify(data));
});

<span class="hljs-comment">// <span class="hljs-doctag">NOTE:</span> after publishing an event with its data, all of the</span>
<span class="hljs-comment">// subscribed callbacks will execute and will receive</span>
<span class="hljs-comment">// a data object from the object firing the event</span>
<span class="hljs-comment">// there are 3 console.logs executed</span>
publisherSubscriber.publish(<span class="hljs-string">"mouseClicked"</span>, {<span class="hljs-string">"data"</span>: <span class="hljs-string">"data1"</span>});
publisherSubscriber.publish(<span class="hljs-string">"mouseHovered"</span>, {<span class="hljs-string">"data"</span>: <span class="hljs-string">"data2"</span>});

<span class="hljs-comment">// we unsubscribe from an event by removing the subscription ID</span>
publisherSubscriber.unsubscribe(<span class="hljs-string">"mouseClicked"</span>, subscriptionID3);

<span class="hljs-comment">// there are 2 console.logs executed</span>
publisherSubscriber.publish(<span class="hljs-string">"mouseClicked"</span>, {<span class="hljs-string">"data"</span>: <span class="hljs-string">"data1"</span>});
publisherSubscriber.publish(<span class="hljs-string">"mouseHovered"</span>, {<span class="hljs-string">"data"</span>: <span class="hljs-string">"data2"</span>});
</code></pre>

<p>This design pattern is useful in situations when we need to perform multiple operations on a single event being fired. Imagine you have a scenario where we need to make multiple AJAX calls to a back-end service and then perform other AJAX calls depending on the result. You would have to nest the AJAX calls one within the other, possibly entering into a situation known as callback hell. Using the publisher/subscriber pattern is a much more elegant solution.</p>

<p>A downside to using this pattern is difficult testing of various parts of our system. There is no elegant way for us to know whether or not the subscribing parts of the system are behaving as expected.</p>

<h3 id="mediator-pattern">Mediator Pattern</h3>

<p>We will briefly cover a pattern which is also very useful when talking about decoupled systems. When we have a scenario where multiple parts of a system need to communicate and be coordinated, perhaps a good solution would be to introduce a mediator.</p>

<p>A mediator is an object which is used as a central point for communication between disparate parts of a system and handles the workflow between them. Now, it is important to stress out that it handles workflow. Why is this important?</p>

<p>Because there is a large similarity with the publisher/subscriber pattern. You might ask yourself, <em>OK, so these two patterns both help implement better communication between objects… What is the difference?</em></p>

<p>The difference is that a mediator handles the workflow, whereas the publisher/subscriber uses something called a “fire and forget” type of communication. The publisher/subscriber is simply an event aggregator, meaning it simply takes care of firing the events and letting the correct subscribers know which events were fired. The event aggregator does not care what happens once an event was fired, which is not the case with a mediator.</p>

<p>A nice example of a mediator is a wizard type of interface. Let’s say you have a large registration process for a system you have worked on. Oftentimes, when a lot of information is required from a user, it is a good practice to break this down into multiple steps.</p>

<p>This way, the code will be a lot cleaner (easier to maintain) and the user isn’t overwhelmed by the amount of information which is requested just in order to finish the registration. A mediator is an object which would handle the registration steps, taking into account different possible workflows that might happen due to the fact that each user could potentially have a unique registration process.</p>

<p>The obvious benefit from this design pattern is improved communication between different parts of a system, which now all communicate through the mediator and cleaner codebase.</p>

<p>A downside would be that now we have introduced a single point of failure into our system, meaning if our mediator fails, the entire system could stop working.</p>

<h3 id="prototype-pattern">Prototype Pattern</h3>

<p>As we have already mentioned throughout the article, JavaScript does not support classes in its native form. Inheritance between objects is implemented using prototype-based programming.</p>

<p>It enables us to create objects which can serve as a prototype for other objects being created. The prototype object is used as a blueprint for each object the constructor creates.</p>

<p>As we have already talked about this in the previous sections, let’s show a simple example of how this pattern might be used.</p>

<pre><code class="language-javascript hljs"><span class="hljs-keyword">var</span> personPrototype = {
    <span class="hljs-attr">sayHi</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Hello, my name is "</span> + <span class="hljs-keyword">this</span>.name + <span class="hljs-string">", and I am "</span> + <span class="hljs-keyword">this</span>.age);
    },
    <span class="hljs-attr">sayBye</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params"></span>) </span>{
        <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Bye Bye!"</span>);
    }
};

<span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">Person</span>(<span class="hljs-params">name, age</span>) </span>{
    name = name || <span class="hljs-string">"John Doe"</span>;
    age = age || <span class="hljs-number">26</span>;

    <span class="hljs-function"><span class="hljs-keyword">function</span> <span class="hljs-title">constructorFunction</span>(<span class="hljs-params">name, age</span>) </span>{
        <span class="hljs-keyword">this</span>.name = name;
        <span class="hljs-keyword">this</span>.age = age;
    };

    constructorFunction.prototype = personPrototype;

    <span class="hljs-keyword">var</span> instance = <span class="hljs-keyword">new</span> constructorFunction(name, age);
    <span class="hljs-keyword">return</span> instance;
}

<span class="hljs-keyword">var</span> person1 = Person();
<span class="hljs-keyword">var</span> person2 = Person(<span class="hljs-string">"Bob"</span>, <span class="hljs-number">38</span>);

<span class="hljs-comment">// prints out Hello, my name is John Doe, and I am 26</span>
person1.sayHi();
<span class="hljs-comment">// prints out Hello, my name is Bob, and I am 38</span>
person2.sayHi();
</code></pre>

<p>Take notice how prototype inheritance makes a performance boost as well because both objects contain a reference to the functions which are implemented in the prototype itself, instead of in each of the objects.</p>

<h3 id="command-pattern">Command Pattern</h3>

<p>The command pattern is useful in cases when we want to decouple objects executing the commands from objects issuing the commands. For example, imagine a scenario where our application is using a large number of API service calls. Then, let’s say that the API services change. We would have to modify the code wherever the APIs that changed are called.</p>

<p>This would be a great place to implement an abstraction layer, which would separate the objects calling an API service from the objects which are telling them <em>when</em> to call the API service. This way, we avoid modification in all of the places where we have a need to call the service, but rather have to change only the objects which are making the call itself, which is only one place.</p>

<p>As with any other pattern, we have to know when exactly is there a real need for such a pattern. We need to be aware of the tradeoff we are making, as we are adding an additional abstraction layer over the API calls, which will reduce performance but potentially save a lot of time when we need to modify objects executing the commands.</p>

<pre><code class="language-javascript hljs"><span class="hljs-comment">// the object which knows how to execute the command</span>
<span class="hljs-keyword">var</span> invoker = {
    <span class="hljs-attr">add</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x, y</span>) </span>{
        <span class="hljs-keyword">return</span> x + y;
    },
    <span class="hljs-attr">subtract</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">x, y</span>) </span>{
        <span class="hljs-keyword">return</span> x - y;
    }
}

<span class="hljs-comment">// the object which is used as an abstraction layer when</span>
<span class="hljs-comment">// executing commands; it represents an interface</span>
<span class="hljs-comment">// toward the invoker object</span>
<span class="hljs-keyword">var</span> manager = {
    <span class="hljs-attr">execute</span>: <span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">name, args</span>) </span>{
        <span class="hljs-keyword">if</span> (name <span class="hljs-keyword">in</span> invoker) {
            <span class="hljs-keyword">return</span> invoker[name].apply(invoker, [].slice.call(<span class="hljs-built_in">arguments</span>, <span class="hljs-number">1</span>));
        }
        <span class="hljs-keyword">return</span> <span class="hljs-literal">false</span>;
    }
}

<span class="hljs-comment">// prints 8</span>
<span class="hljs-built_in">console</span>.log(manager.execute(<span class="hljs-string">"add"</span>, <span class="hljs-number">3</span>, <span class="hljs-number">5</span>));
<span class="hljs-comment">// prints 2</span>
<span class="hljs-built_in">console</span>.log(manager.execute(<span class="hljs-string">"subtract"</span>, <span class="hljs-number">5</span>, <span class="hljs-number">3</span>));
</code></pre>

<h3 id="facade-pattern">Facade Pattern</h3>

<p>The facade pattern is used when we want to create an abstraction layer between what is shown publicly and what is implemented behind the curtain. It is used when an easier or simpler interface to an underlying object is desired.</p>

<p>A great example of this pattern would be selectors from DOM manipulation libraries such as jQuery, Dojo, or D3. You might have noticed using these libraries that they have very powerful selector features; you can write in complex queries such as:</p>

<pre><code class="language-javascript hljs">jQuery(<span class="hljs-string">".parent .child div.span"</span>)
</code></pre>

<p>It simplifies the selection features a lot, and even though it seems simple on the surface, there is an entire complex logic implemented under the hood in order for this to work.</p>

<p>We also need to be aware of the performance-simplicity tradeoff. It is desirable to avoid extra complexity if it isn’t beneficial enough. In the case of the aforementioned libraries, the tradeoff was worth it, as they are all very successful libraries.</p>

<h2 id="next-steps">Next Steps</h2>

<p>Design patterns are a very useful tool which any <a href="https://www.toptal.com/javascript">senior JavaScript developer</a> should be aware of. Knowing the specifics regarding design patterns could prove incredibly useful and save you a lot of time in any project’s lifecycle, especially the maintenance part. Modifying and maintaining systems written with the help of design patterns which are a good fit for the system’s needs could prove invaluable.</p>

<p>In order to keep the article relatively brief, we will not be displaying any more examples. For those interested, a great inspiration for this article came from the Gang of Four book <em>Design Patterns: Elements of Reusable Object-Oriented Software</em> and Addy Osmani’s <em>Learning JavaScript Design Patterns</em>. I highly recommend both books.</p>
<div class="post_key_learnings for-post"><h2 class="post_key_learnings-heading" data-disable_middle_content_placement="true">Understanding the Basics</h2><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="expanded" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-expanded" data-role="button"></span><h3 class="post_key_learnings-title is-expanded" data-disable_middle_content_placement="true" data-role="button">What are the main characteristics of JavaScript?</h3><p class="post_key_learnings-body" data-role="content">JavaScript is asynchronous, supports first-class functions, and is prototype-based.</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">What are design patterns, and how do they support software architects?</h3><p class="post_key_learnings-body is-hidden" data-role="content">Design patterns are reusable solutions to commonly occurring problems in software design. They are proven solutions, easily reusable and expressive. They lower the size of your codebase, prevent future refactoring, and make your code easier to understand by other developers.</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">What is JavaScript and how did it come to life?</h3><p class="post_key_learnings-body is-hidden" data-role="content">JavaScript is a client-side scripting language for browsers first created by Brendan Eich for Netscape Navigator by what is now Mozilla.</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">What is ECMAScript?</h3><p class="post_key_learnings-body is-hidden" data-role="content">ECMAScript is a standardized scripting language specification which all modern browsers try to support. There are multiple implementations of ECMAScript, the most popular of which is JavaScript.</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">What is a proto-pattern?</h3><p class="post_key_learnings-body is-hidden" data-role="content">A proto-pattern is a pattern-to-be if it passes a certain period of testing by various developers and scenarios where the pattern proves to be useful and gives correct results.</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">What is an anti-pattern?</h3><p class="post_key_learnings-body is-hidden" data-role="content">If a design pattern represents good practice, then an anti-pattern represents bad practice. An example of an anti-pattern would be modifying the Object class prototype. Changes to the Object prototype can be seen in all of the objects that inherit from this prototype (that is, almost all objects in JavaScript).</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">How do we categorize design patterns?</h3><p class="post_key_learnings-body is-hidden" data-role="content">Design patterns can be creational, structural, behavioral, concurrency, or architectural.</p></div><div class="post_key_learnings-item" data-animation-speed="450" data-hide-button="false" data-initial-state="collapsed" data-view="ui#expander"><span class="post_key_learnings-item_arrow is-collapsed" data-role="button"></span><h3 class="post_key_learnings-title is-collapsed" data-disable_middle_content_placement="true" data-role="button">What are a few examples of design patterns?</h3><p class="post_key_learnings-body is-hidden" data-role="content">Some examples discussed in the article above include the constructor pattern, the module pattern, the revealing module pattern, the singleton pattern, the observer pattern, the mediator pattern, the prototype pattern, the command pattern, and the facade pattern.</p></div></div><div class="blog_author_big_banner is-active" data-ga-action="ClickedOnHireTheAuthor_bottom" data-ga-label="comprehensive-guide-javascript-design-patterns" data-view="content#bottom_banner"><h2>About the author</h2><div class="skill_talent for-blog_post"><div class="skill_talent-extra"><a class="skill_talent-photo_wrapper" href="/resume/marko-misura"><img alt="Marko Mišura" class="skill_talent-photo" src="https://uploads.toptal.io/user/photo/224423/large_28e351c51870245ef682264c88defa36.jpg"><div class="skill_talent-photo_hint">View full profile »</div></a><div class="blog_author_big_banner-cta"><a class="button is-green_candy is-default is-full_width is-fixed skill_talent-hire" data-role="banner_link" href="https://www.toptal.com/companies/apply?interested_in=developers&amp;skill=javascript">Hire the Author</a></div></div><div class="skill_talent-main"><a class="link skill_talent-name" href="/resume/marko-misura">Marko Mišura, Croatia</a><div class="clearfix"><div class="skill_talent-member_since">member since November 20, 2015</div></div><div class="skill_talent-skills" data-view="skill_talent#tags" style="max-height: none;"><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/javascript">MEAN Stack</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/python">Python</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/api-development">API Development</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/html5">HTML5</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/angular">Angular</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/mongodb">MongoDB</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/git">Git</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/full-stack">Full-stack</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/django">Django</a><a class="tag skill_talent-skill" data-role="tag" href="https://www.toptal.com/twitter-bootstrap">Bootstrap 3</a><a class="tag" data-role="more" href="/resume/marko-misura" style="">+<span data-role="count">2</span> more</a></div><div class="skill_talent-description">Marko is a full-stack software engineer with over four years of professional experience working with various technologies. He's worked on various projects working in a number of positions with back-end as well as front-end technologies. His skills vary from database modeling, writing web services, to creating responsive client applications. He is highly communicative, responsible, adaptable, and has a passion for writing optimized code. <a class="link" href="/resume/marko-misura">[click to continue...]</a></div></div></div></div><div class="post-join"><a class="button is-white_and_green is-default is-full_width" href="https://www.toptal.com/javascript">Hiring? Meet the Top 10 Freelance JavaScript Developers for Hire in April 2018</a></div><div class="template" data-role="middle_content_template" data-template="{&quot;html&quot;:&quot;<div class=\&quot;embeddable_form-wrapper for-post\&quot; data-role=\&quot;blog_subscribe\&quot; data-view=\&quot;blog_subscribe#form\&quot;><form action=\&quot;/blog/subscription\&quot; class=\&quot;embeddable_form\&quot; data-entity=\&quot;blog_subscription\&quot; data-remote=\&quot;\&quot; data-view=\&quot;form#form\&quot; method=\&quot;post\&quot;><div class=\&quot;embeddable_form-step is-email_form is-current\&quot;><div class=\&quot;embeddable_form-row is-label\&quot;><div class=\&quot;embeddable_form-label_title\&quot;>Like what you&amp;#39;re reading?</div><div class=\&quot;embeddable_form-label\&quot;>Get the latest updates first.</div></div><div class=\&quot;embeddable_form-row form-field is-email_field\&quot;><input autocomplete=\&quot;off\&quot; class=\&quot;input is-medium\&quot; data-role=\&quot;email\&quot; name=\&quot;blog_subscription[email]\&quot; placeholder=\&quot;Enter your email address...\&quot; type=\&quot;text\&quot; /><input name=\&quot;blog_subscription[vertical]\&quot; type=\&quot;hidden\&quot; value=\&quot;developers\&quot; /><input name=\&quot;from_widget\&quot; type=\&quot;hidden\&quot; value=\&quot;true\&quot; /></div><div class=\&quot;embeddable_form-row is-submit\&quot;><input class=\&quot;button is-green_candy is-default is-full_width\&quot; data-loader-text=\&quot;Subscribing...\&quot; data-role=\&quot;submit\&quot; type=\&quot;submit\&quot; value=\&quot;Get Exclusive Updates\&quot; /></div><div class=\&quot;embeddable_form-row is-privacy\&quot;><div class=\&quot;embeddable_form-privacy\&quot;><div class=\&quot;embeddable_form-privacy_icon\&quot;></div><div class=\&quot;embeddable_form-privacy_text\&quot;>No spam. Just great engineering posts.</div></div></div></div><div class=\&quot;embeddable_form-step is-confirmation\&quot; data-place=\&quot;@blog_subscribe\&quot; data-role=\&quot;confirmation\&quot;><div class=\&quot;embeddable_form-row is-label is-success\&quot;><div class=\&quot;embeddable_form-label_title\&quot;>Like what you&amp;#39;re reading?</div><div class=\&quot;embeddable_form-label\&quot;>Get the latest updates first.</div></div><div class=\&quot;embeddable_form-row is-success\&quot;><div class=\&quot;embeddable_form-label is-header\&quot;>Thank you for subscribing!</div><div class=\&quot;embeddable_form-label\&quot;>Check your inbox to confirm subscription. You'll start receiving posts after you confirm.</div></div><div class=\&quot;embeddable_form-row is-success\&quot;><ul class=\&quot;social_share is-horizontal\&quot; data-rss-url=\&quot;https://www.toptal.com/developers/blog.rss\&quot; data-url=\&quot;https://www.toptal.com/developers/blog\&quot; data-view=\&quot;layout#social_share\&quot; data-youtube-channel-url=\&quot;https://www.youtube.com/channel/UCNqm_euTHZz3o5OnKhUS-oA\&quot;><li class=\&quot;social_share-item is-counter\&quot; title=\&quot;Total number of shares\&quot;><span class=\&quot;social_share-item_num\&quot; data-role=\&quot;counter_num\&quot;>0</span><span class=\&quot;social_share-item_text\&quot; data-role=\&quot;counter_text\&quot;>shares</span></li><li class=\&quot;social_share-item\&quot;><a class=\&quot;social_share-item_link\&quot; data-role=\&quot;link\&quot; data-track-click=\&quot;SocialShareButtonClicked\&quot; data-track-default-data=\&quot;{&amp;quot;network&amp;quot;:&amp;quot;twitter&amp;quot;}\&quot; data-type=\&quot;twitter\&quot; title=\&quot;Share on Twitter\&quot;><img class=\&quot;social_share-item_image\&quot; height=\&quot;50\&quot; src=\&quot;https://assets.toptal.io/assets/front/static/public/primitives/social/share_bar/twitter_83c6d4.png\&quot; width=\&quot;50\&quot; /></a></li><li class=\&quot;social_share-item\&quot;><a class=\&quot;social_share-item_link\&quot; data-role=\&quot;link\&quot; data-track-click=\&quot;SocialShareButtonClicked\&quot; data-track-default-data=\&quot;{&amp;quot;network&amp;quot;:&amp;quot;facebook&amp;quot;}\&quot; data-type=\&quot;facebook\&quot; title=\&quot;Share on Facebook\&quot;><img class=\&quot;social_share-item_image\&quot; height=\&quot;50\&quot; src=\&quot;https://assets.toptal.io/assets/front/static/public/primitives/social/share_bar/facebook_dc66c9.png\&quot; width=\&quot;50\&quot; /></a></li><li class=\&quot;social_share-item\&quot;><a class=\&quot;social_share-item_link\&quot; data-role=\&quot;link\&quot; data-track-click=\&quot;SocialShareButtonClicked\&quot; data-track-default-data=\&quot;{&amp;quot;network&amp;quot;:&amp;quot;google_plus&amp;quot;}\&quot; data-type=\&quot;google_plus\&quot; title=\&quot;Share on Google Plus\&quot;><img class=\&quot;social_share-item_image\&quot; height=\&quot;50\&quot; src=\&quot;https://assets.toptal.io/assets/front/static/public/primitives/social/share_bar/google_plus_355fb0.png\&quot; width=\&quot;50\&quot; /></a></li></ul></div></div></form></div>&quot;}"></div></div>
