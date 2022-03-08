# Working with Data

Nearly all coding projects at Steer involve input data of some kind. Frequently,
input data is in the form of text files (e.g., delimited or fixed-width files),
but it's also important to be comfortable working with data from web APIs and
databases, which are more complex. This section discusses the use of data from
these sources.

## Web APIs

An Application Programming Interface, or API, is an interface presented by one
piece of software that enables use by other software. Typically the presenting
software exposes "endpoints" that can be used by other software to get
information or perform actions. Since the software accessing the endpoints needs
to know how to use them, good documentation is an essential part of any API.
Examples of APIs include software libraries that expose functions and other
objects for other software to call, operating systems that expose endpoints to
provide common features to applications, and web APIs, which expose endpoints
allowing users to make requests to web servers.

Web APIs provide access to the back end of a web application and can be
connected to multiple front ends. This means an organization can use a single
API to provide data to web applications, mobile applications, proprietary
systems, etc. In some cases, organizations provide APIs for public use, and
these public APIs frequently enable access to data of various types. Accessing
data via web APIs eliminates the need to manually download data and ensures that
up-to-date data is returned with each call to the API. In addition, since API
providers are encouraging developers to build applications that rely on their
public APIs, changes to APIs are generally well-communicated.

::: tip
If you're downloading data periodically from an API, you may want to save a copy
of the data each time. Since many APIs only provide access to current data,
doing so will ensure you have access to the data you've acquired previously.
:::

Details vary by API, but there can be limitations in the form of usage
restrictions, rate limits, and charges (often beyond a free tier). Be sure you
read the documentation whenever you're using a new API so you can be sure you
know exactly what you're getting into. Most web APIs also require users to
register for an API key, which is an alphanumeric identifier used to track a
specific user's API usage. Treat API keys like passwords and do not share!

The most common type of Web APIs are RESTful (REstorative State Transfer) APIs,
which are stateless. Since RESTful APIs are stateless, this means all
information the server needs to respond must be included in each request.
Accordingly, an API request generally takes the form of a string consisting of a
base URL, a specific endpoint, and a set of zero or more parameters that define
the request.

Once the server receives the request and performs any required processing, it
returns a status code and, assuming no errors occurred, some structured data,
which is typically formatted as either JSON or XML, both common data formats.
The response then needs to be parsed prior to use in applications or analysis,
which can be done with the help of packages that exist specifically for this
purpose.

For more information, check out the Coding at Steer session on
[Working with Web APIs](https://sdg.eloomi.com/learning/modules/1383/element/660?program=80)
and the
[associated documents](https://sdgworld.sharepoint.com/:f:/r/sites/SteerCoders/Shared%20Documents/General/Coding%20at%20Steer/Working%20with%20Web%20APIs)
(must be a member of the Steer Coders team).

## Databases

A database is a structured set of electronic data that is designed to provide
efficiency, data integrity, and security. Most databases are relational
databases, in which data is stored in tables with primary keys that enable
unique identification of records, and foreign keys that are used to reference
data in other tables. SQL is typically used to interact with relational
databases. The following graphic displays the structure, or schema, of a sample
relational database.

**Sample database schema**  
![A sample database schema](sample_database_schema.png)

There is also another type of database called a NoSQL database that, not
surprisingly, does not use SQL. NoSQL databases typically store data as a set of
"documents" and can be useful in cases where data structures need to be
flexible.

A Database Management System, or DBMS, is the software used to manage and
interact with a database. Steer's recommended DBMSs for web applications are
[PostgreSQL](https://www.postgresql.org) and [MySQL](https://www.mysql.com),
which are both free and open-source. For local use,
[SQLite](https://www.sqlite.org/index.html) is a good lightweight option, and is
also free and open-source. Note that different database management systems are
not interoperable, but data can typically be dumped from one DBMS to a text file
and imported into another DBMS.

When you send a query to a database, the DBMS does the work of querying the full
set of data and only returning the results of your query. This presents
significant advantages over reading in the full dataset from a text file and
then filtering. Importantly, in the latter case, the full data file has to be
read into RAM (if it fits), while this is not the case when querying a database.

For more information, check out the Coding at Steer session on
[Working with Databases](https://sdg.eloomi.com/learning/modules/1388/element/670?program=80)
and the
[associated documents](https://sdgworld.sharepoint.com/:f:/r/sites/SteerCoders/Shared%20Documents/General/Coding%20at%20Steer/Working%20with%20Databases)
(must be a member of the Steer Coders team).

## Privacy and Security

With any potentially sensitive data, be sure to take the appropriate precautions
to ensure privacy laws are respected and the security of the data is maintained.
Refer to
[Steer's Global Data Protection Policy](http://eric.steergroup.com/company-info/General%20Data%20Protection%20Regulation/1.%20Global%20Data%20Protection%20Policy%20April%202021.pdf)
(must be connected to the Steer Network) for more details.
