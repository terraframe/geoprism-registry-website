---
layout: default
title: Features
nav_order: 3
---

# GeoPrism Registry Features
{: .no_toc }


<!-- Enables geospatial initiatives and infrastructures
{: .fs-6 .fw-300 } -->

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---


# System Management

## Localization
GeoPrism Registry can be localized to different languages for both application pages and data elements including:
* Geo-Object Types
* Hierarchies
* Geo-Objects (including attributes)
* Lists
This makes it possible to navigate the system and record data in multiple languages.

![image tooltip here](../../assets/images/Screenshot from 2022-11-04 00-25-32.png)

## Organization Management
GeoPrism Registry supports the management of lists, spatial data and hierarchies across multiple organizations, so that only those with the responsibility to maintain data for a given organization can do so within that organization only.

## User Management
GeoPrism Registry supports management of users within and across organizations.

**User Roles Within Organizations:**
* Registry Administrator (RA)
* Registry Maintainer (RM)
* Registry Contributor (RC)

**User Roles Across Organizations:**
* System Administrator (SA)

## Email Notifications
GeoPrism Registry uses email settings to send email notifications to users of the system, in particular account creation invitations and automated change request notifications.

# Data Set Definitions
GeoPrism Registry organizes data by Geo-Object Types which are containers for Geo-Objects that are of the same type and share the same data schema. Geo-Object Types are used to define hierarchies, create lists, and generally explore or manage Geo-Object data.

## Access and Management
All Geo-Object Types and Geo-Object Type Groups are managed by organizations to ensure Geo-Object curation from authoratative groups. Organizations can set the visibility of Geo-Object Types and Groups to ensure privacy of sensitive data.


## Individual Geo-Object Types
Individual Geo-Object Types contain Geo-Objects of the same type.
![image tooltip here](../../assets/images/Screenshot from 2022-11-08 11-41-31.png)

### Customization (e.g. custom attributes)
Geo-Object Types have configurable default properties including the ability to add custom attributes beyond the defaults.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 11-48-32.png)
![image tooltip here](../../assets/images/Screenshot from 2022-11-08 11-49-24.png)


## Geo-Object Type Groups
Geo-Object Type Groups allow for grouping Geo-Object Types that share common data schemas but represent differnt types of data. 

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 12-01-40.png)


# Hierarchy Management
Hierarchies are the formal definitions of how Geo-Object Types relate to each other. They provide a structure for how Geo-Objects can be linked.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 12-15-01.png)

## Access and Management
All hierarchies are managed by organizations to ensure Geo-Objects can be linked and shared by authoratative groups. 

## Single Hierarchies
Single hierarchies contain Geo-Object Types from a single organization.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 12-30-25.png)

## Multiple Hierarchies
Multi-hierarchies enable the ability to share Geo-Object Types across hierarchies to link data between Geo-Objects to fit different operational needs without duplicating Geo-Objects across hierarchies. Instead only the relationship links are managed in each hierarchy to enable the unque queryability of each hierarchy.

As an example, Village (MOH) plays a different role in the CHW - Health post hierarchy than the MOH-MOHA Village hierarchy.

![image tooltip here](../../assets/images/image832.png)


## Inheritance
Hierarchies can be shared across organizations using inheritance. This means that Geo-Objects and the linked relationships between them can be managed by an authoritative group while being extended by another hierarchy.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 12-59-17.png)

# Change Over Time
To maintain a single representation of a Geo-Object changes can be tracked through time for attributes, hierarchies the Geo-Object participates in, and geometries. 

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 16-37-23.png)

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 16-42-22.png)

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 16-42-40.png)


# Data Integration
Data imported to GeoPrism Regsitry is integrated into Geo-Object Types for specific hierarchies as Geo-Objects to maintain a single source of truth. Importing allows for both curating Geo-Objects and the relationships (links) getween Geo-Objects in a hierarchy.

## Spreadsheet Imports
Spreadsheets can be imported that include attribute data, coordinates (for point data), and hierarchies (when recorded in columns representing levels).

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 16-59-00.png)

## Shapefile Imports
Shapefiles can be imported that include attribute data as well as point, line, or polygon geometries.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 17-01-19.png)



## Import Workflow
Imports to GeoPrism Registy are configurable and include quality checks to ensure integrated data maintains a high level of data integrity.

### Configure Attribute Matching
Columns in a spreadsheet or shapefile can be mapped to Geo-Object Type atteibutes.
![image tooltip here](../../assets/images/attribute-matching.png)

### Configure Hierarchy Relationship Column Matching
Columns in a spreasheet or shapefile that represent hierarchy levels can be mapped to Geo-Object Types in the target hierarchy.

![image tooltip here](../../assets/images/hierarchy-matching.jpg)


## External System Registration
GeoPrism Registry supports integrating with external systems to help facilitate the exchange of data between systems.

**Supported Integrations**
* District Health Information System 2 (DHIS2)
* Reveal
* Fast Healthcare Interoperability Resources® (FHIR)


# Integrated Data
Data that's been integrated into GeoPrism Registry is available through robust tools for veiwing, exploring, updating, and sharing.

## Lists
Lists allow for creating tabular views of Geo-Object data for specific hierarchies. Lists are algorithmically generated based on configuration of list types.

### Single Date List
A single date list allows for maintaining versions of a list for a specific date.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-09-43.png)

### Frequency Based List
A frequency based list allows for maintaining versions of lists for every period across a time range (e.g. annual, bi-annual, etc...).

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-12-24.png)

### Period Based List
A period based list allows for maintaining versions of lists for specific periods of time.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-08-09.png)

### List Period Elements
Each list period has a working version and any additional published historical versions.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-24-58.png)

### List Working Versions
A working version which contains the current version of the data and is the primary place to review or edit Geo-Object data.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-36-31.png)

### Historical versions
Published versions are historical snapshots of lists used to keep historical records of Geo-Object data.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-37-04.png)

### List Contents (tabular)
A list itself, whether a working version or published version, is a tabular view of the Geo-Object data. 

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-31-49.png)

### List Geospatial Data
A lists geospatial data, whether a working version or published version, is a map view (viewed in the Esplorer) of any geometries associated with the Geo-Objects in a list.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-33-56.png)

## Explorer
The GeoPrism Registry Explorer allows for finding, viewing, comparing, and editing geospatial data. 

### View List Data Spatially
Points, lines, and polygons can all be visualized and edited.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-56-31.png)

### Search For and Viewing Contextual Layers
Context layers are geospatial data from other lists in the system that can be added to the map to build a more complete picture.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 18-57-06.png)

### Edit Geo-Objects
Geo-Object attributes, hierarchy relationships, and geometries are editable through the Explorer.

![image tooltip here](../../assets/images/Screenshot from 2022-11-08 19-01-05.png)

### Change requests
Change requests are created when users Registry Contributors submit changes for a Geo-Object to be reviewed by a Registry Maintainer.



## Share Data
Lists or geospatial data can be exported to common formats. 

![image tooltip here](../../assets/images/export-1.png)
![image tooltip here](../../assets/images/export-2.png)

### Export Lists
Lists are exported to spreadsheet with associated metadata.

![image tooltip here](../../assets/images/exported-list.png)
![image tooltip here](../../assets/images/exported-list-meta.png)

### Export Geospatial Data
Geospatial data is exported to shapefile with associated metadata that can be viewed in other mapping software like Quantum GIS.

![image tooltip here](../../assets/images/exported-shape.png)
![image tooltip here](../../assets/images/exported-shape-meta.png)


# Historical Events 
GeoPrism Registry allows for capturiong the changes to Geo-Objects such as when there are splits, merges, reassignment, upgrades (moving up the hierarchy), or downgrades (moving down the hierarchy).

## Create A Historical Event
A graphical interface allows for configuration of a historical event.

![image tooltip here](../../assets/images/historical-event.png)

## View A History Of Historical Events
Historical events are listed with the ability to focus on events for specific Geo-Object Types. 

![image tooltip here](../../assets/images/historical-events.png)


