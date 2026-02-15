# Milestone 1: Inception

## 1. State of the Art

### Tools in the Market

| Tool                                            | Focus                                                    | Key Strengths                                                                                                                 |
| ----------------------------------------------- | -------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| **Vanta**             | Automated compliance and security management             | Evidence collection, integrations, recognized brand                                                                           |
| **Drata**             | Continuous compliance automation and monitoring          | Intuitive dashboard, broad framework coverage, automated evidence collection, auditor collaboration tools                     |
| **Secureframe** | Automated compliance and continuous monitoring           | Automated testing for a broad number of frameworks and user-friendly interfaces                                               |
| **Sprinto**         | Compliance automation platform for cloud-first companies | Continuous control monitoring, automated evidence collection, real-time compliance tracking, and smooth auditor collaboration  |

### Traditional Compliance Management vs Automated Platforms

| Aspect                | Traditional Method                                          | Automated Platforms (e.g., Vanta, Drata, Sprinto)        |
| --------------------- | ----------------------------------------------------------- | -------------------------------------------------------- |
| **Approach**          | Manual, document-heavy, spreadsheet-based processes         | Automated evidence collection and continuous monitoring   |
| **Speed**             | Slow — audits and checks are done periodically              | Real-time compliance tracking and instant updates         |
| **Accuracy**          | Higher risk of human error and outdated documentation       | Automated checks reduce errors and keep controls current  |
| **Scalability**       | Difficult to scale; relies heavily on staff and consultants | Easily scales with infrastructure and new frameworks      |
| **Cost**              | High long-term cost due to manual labor and consulting      | Higher initial cost but lower ongoing maintenance cost    |
| **Visibility**        | Limited visibility into current compliance status           | Dashboards and reports offer full, real-time visibility   |
| **Audit Readiness**   | Reactive — evidence gathered when audit approaches          | Proactive — audit-ready at any time                       |
| **AI / Intelligence** | None                                                        | AI for remediation guidance or control mapping            |

Traditional compliance management relies heavily on manual processes, human interpretation, and static documentation.  
This makes it **time-consuming, error-prone, and hard to scale**, especially for cloud-based environments where configurations change rapidly.

### Traditional vs Automated Platforms vs CertiBot

| Aspect               | Traditional Method                                 | Automated Platforms (Vanta, Drata, Sprinto)              | **CertiBot**                                                                                         |
| -------------------- | -------------------------------------------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| **Core Focus**       | Manual compliance management and audits            | Automating compliance operations and evidence collection | **AI-powered compliance interpretation and interactive guidance**                                    |
| **Approach**         | Consultants interpret and apply standards manually | Use predefined frameworks to automate control monitoring | **Conversational AI interprets, explains, and operationalizes compliance requirements**              |
| **Process**          | Compliance execution and audits                    | Continuous compliance and certification management       | **Pre-compliance understanding + ongoing guidance**                                                  |
| **Automation Type**  | None                                               | Workflow and evidence collection automation              | **Understands and explains compliance**                                                              |
| **User Interaction** | Reports and static documentation                   | Dashboards and alerts                                    | **Chat-based assistant and dashboards**                                                              |
| **Example Use Case** | Human expert designs ISO 27001 controls            | Platform collects evidence for ISO 27001                 | **User asks: “How can I implement ISO 27001 A.5.1?” — CertiBot explains step-by-step with examples** |
| **Scalability**      | Limited to consultant capacity                     | Scales with integrations                                 | **Scales with AI understanding of multiple standards and jurisdictions**                             |
| **Unique Value**     | Human expertise                                    | Process automation                                       | **Intelligent compliance copilot — interpretation, mapping, and advisory**                           |

#### Value Proposition

While tools like **Vanta, Drata, and Sprinto automate the "doing" of compliance**, **CertiBot automates the "understanding"**.  
It interprets standards, explains implementation, and helps users act correctly.
CertiBot also extracts standards. Other tools do not provide this capability.

CertiBot combines:

- **Natural language interaction** — a chatbot interface where users can ask compliance-related questions;
- **AI reasoning** — automatic extraction and mapping of obligations from standards (ISO, SOC 2, NIS2, etc.);
- **Guidance** — context-aware explanations and examples for implementing specific controls.


## 2. Personas

### Maria Lopez

#### Compliance Officer

A compliance officer ensures an organization follows relevant laws, regulations, and internal policies by conducting risk assessments, developing controls, monitoring operations, training employees, and investigating violations to prevent legal, financial, and reputational harm.

They act as risk managers, guiding companies to operate ethically and within legal boundaries.

**Background**
- Eight years in regulatory compliance in the financial sector.
- Holds a master’s degree in Business Law and Compliance.
- Responsible for interpreting regulations like GDPR, PCI-DSS, and ISO standards and ensuring organizational adherence.

**Skill or Knowledge Level**

High proficiency in regulatory compliance, risk management, and policy interpretation. Experienced in applying GDPR, NSI2, and ISO standards in real-world scenarios.

**Job to Be Done, Needs, or Wants**

- Ask questions about how to implement and document compliance requirements (e.g., “What records do I need for ISO 9001?”).
- Obtain step-by-step guidance on organizational processes and controls for various or specific standards.
- Verify if current documentation, policies, or procedures meet required norms.
- Create and improve required documents using templates.
- Prepare for audits by confirming readiness and completeness via chatbot checklists.
- Keep a log of key decisions made during the compliance process.
- Stay aware of updates or changes to compliance norms.

**Main Challenges, Pain Points, or Frustrations**

- Difficulty interpreting legal or regulatory text into actionable items.
- Risk of missing documentation or requirements due to unclear standards.
- Time spent searching multiple documents or guidelines for answers.
- Anxiety over audit readiness and fear of non-compliance.
- Limited expert support—especially for new or updated norms.

#### User Story 1

As a Compliance Officer, I want to chat with a chatbot that answers questions and explains the implementation and documentation of requirements in natural language to ensure the communication is clear and easy to understand.

**Acceptance Criteria:**
- Given: The user is interacting with the Chatbot
- When: The Chatbot is asked a question
- Then: It answers naturally
- And: The response is contextually relevant to the user’s question
- And: The chatbot provides follow-up options or clarifications if needed

#### User Story 2

As a Compliance Officer, I want to ask the chatbot for step-by-step guidance on implementing compliance clauses or controls so that I can easily translate regulatory text into operational procedures.

**Acceptance Criteria**
- Given: The user selects a clause or asks about a specific requirement
- When: The chatbot processes the request
- Then: It provides clear, practical implementation guidance in plain language
- And: It offers examples or templates relevant to the selected standard

#### User Story 3

As a Compliance Officer, I want the chatbot to notify me when compliance standards are updated so that I can proactively adjust our policies and documentation.

**Acceptance Criteria**
- Given: The user has previously implemented a norm
- When: The chatbot detects a new or revised regulation
- Then: It sends a notification message to the user (notification tab?)
- And: When prompted, it summarizes the changes and their potential impact on compliance

#### User Story 4

As a Compliance Officer, I want to ask the chatbot to perform an audit readiness check so that I can quickly assess our level of compliance before an external audit.

**Acceptance Criteria**
- Given: The user initiates an audit readiness request in the chat
- When: The chatbot evaluates available documentation and controls
- Then: It provides a readiness score and highlights non-conformities
- And: It suggests corrective actions to close identified gaps

#### User Story 5

As a Compliance Officer, I want a dashboard with information on my implementations, so that I can keep track of my progress.

**Acceptance Criteria**
- Given: The user is implementing a requirement
- When: He wants to check his progress
- Then: He opens up a tab/asks the chatbot to provide him the information

#### User Story 6

As a Compliance Officer, I want to be able to download implementation and verification reports, so that I can share it more effectively with my team/higher ups.

**Acceptance Criteria**
- Given: There is a verification/implementation
- When: The user wants to download the content
- Then: They click on a "Download as a [file]" button
- And: The content is downloaded into the user's machine

#### User Story 7

As a Compliance Officer, I want the chatbot to provide me with definitions or explanations of regulatory terms so that I can easily understand legal or technical language.

**Acceptance Criteria**
- Given: The user asks about a regulation or term
- When: The chatbot processes the term
- Then: It provides a concise definition
- And: It includes references to the source regulation (maybe?)

#### User Story 8

As a Compliance Officer, I want to be able to log in into an account, so that I can keep an implementation and chat history stored.

**Acceptance Criteria**
- Given: The user has an account in the system
- When: He logs into it
- Then: He gets access to a history tab with implementation/chats (or both)


### Sophie Martin

#### Internal Auditor

An Internal Auditor provides management with independent assurance and advice by evaluating a company's internal controls, risk management, and governance processes to help achieve organizational objectives.

Their work involves identifying inefficiencies, risks, and potential fraud, then recommending solutions to improve operations and ensure compliance with laws and regulations.

**Background**
- Six years auditing IT, operational, and regulatory compliance in multinational companies.
- Skilled in ISO standards, GDPR, and internal audit frameworks.
- Responsible for verifying organizational compliance and reporting findings to management.

**Skill or Knowledge Level**

High expertise in auditing processes, compliance verification, and risk evaluation. Familiar with ISO standards, GDPR, and internal audit methodologies.

**Job to Be Done, Needs, or Wants**

- Primary Goal: To efficiently verify that all organizational processes, documents, and controls comply with applicable regulations through a transparent, traceable, and automated audit process.
- Upload and review organizational documents.
- Automatically map evidence to relevant requirements using AI suggestions.
- Create automated audit reports.
- Present compliance dashboards to management.

**Main Challenges, Pain Points, or Frustrations**

- Manual evidence collection and validation: Compliance evidence is scattered across emails, folders, spreadsheets, and systems, making verification difficult.
- Lack of traceability between requirements and controls.
- Time-consuming and repetitive audits.
- Difficulty identifying gaps and non-conformities.

#### User Story 1

As an Internal Auditor, I want to upload the collected evidence documents to the system so that norm compliance can be verified automatically.

**Acceptance Criteria**
- Given: The evidence documents for upload
- When: I upload them to the platform
- Then: The AI suggests control mappings
- And: I either accept the mapping or override the suggestion

#### User Story 2

As an Internal Auditor, I want to get an automatic audit report so that I can verify the compliance level of the project I'm auditing.

**Acceptance Criteria**
- Given: The evidence documentation in the platform
- When: I ask for an audit report
- Then: The system generates a report with estimates of compliance coverage


### John Doe

#### Compliance Specialist

A Compliance Specialist evaluates an organization's adherence to laws, regulations, and internal policies, identifying risks and gaps through audits and data analysis to ensure operational integrity and prevent legal or financial penalties.

**Background**
Works in a mid-sized company, helps teams follow standards and prepares for audits. Has experience with ISO and similar norms, and reviews documentation for compliance.

**Skill or Knowledge Level**

Highly experienced in compliance standards and audit processes.

**Job to Be Done, Needs, or Wants**

- Review how the AI mapped evidence, documents, and processes to specific normative requirements (e.g., ISO clauses).
- Edit, correct, or approve the AI’s suggested mappings to ensure accurate compliance.
- Review auto-detected matches between requirements and evidence.
- Confirm that all required standards are properly implemented and documented.

**Main Challenges, Pain Points, or Frustrations**

- Comparing documents, processes, and evidence against each normative requirement is time-consuming and repetitive.

#### User Story 1

As a Compliance Specialist, I want to be able to make changes to the AI's information mappings so that the data is more accurate.

**Acceptance Criteria**
- Given: The AI mapped information
- When: The data is edited or approved
- Then: It is safely stored on the database for the chatbot to use

#### User Story 2

As a Compliance Specialist, I want to view a history of all AI mapping edits and approvals so that I can maintain an audit trail of changes.

**Acceptance Criteria**
- Given: A set of mapping records
- When: The user opens the change history
- Then: The log shows who made the edit, when, and what was changed

#### User Story 3

As a Compliance Specialist, I want to compare two compliance standards side-by-side so that I can identify overlapping or conflicting requirements.

**Acceptance Criteria**
- Given: Two selected standards
- When: The comparison view is generated
- Then: It highlights similarities and differences
- And: The user can export the comparison summary

#### User Story 4

As a Compliance Specialist, I want to visualize mapping coverage across all standards so that I can quickly assess completeness.

**Acceptance Criteria**
- Given: A set of mapped standards
- When: The user opens the visualization
- Then: It shows percentage coverage and unmapped areas
- And: It links directly to missing elements


## 3. Functional Requirements

#### Decomposing Criteria

**Given:** The user selects a clause or asks about a specific requirement:

- The system must accept selecting controls/politics from a list and a text query.

**When:** The chatbot processes the request:

- The system must parse and understand the regulatory requirements.

**Then:** It provides clear, practical implementation guidance in plain language:

- The system must generate and return a step-by-step practical implementation of the norms.
- The system must return the guidance in plain, non-technical language.

**And:** It offers examples or templates relevant to the selected standard:

- The system must return sample documents, checklists, or templates relevant to the norms.
- The system must ensure the examples are mapped to the selected standards.


#### Requirements

**Input Handling**
- The system must allow users to select a compliance clause from a provided list.
- The system must allow users to write free-text queries regarding compliance clauses or controls.

**Clause Processing**
- The system must parse selected clauses or user queries to identify the compliance requirement.

**Guidance Generation**
- The system must generate step-by-step implementation guidance for the selected or queried clause.
- The system must ensure that all guidance is written in clear, accessible, and non-legal language.

**Examples and Templates**
- The system must provide at least one example or template relevant to the selected compliance standard and clause.
- The system must tailor examples and templates to match the standard (e.g., ISO 27001, GDPR).

**User Interaction**
- The system must present guidance and examples in a conversational format within the chatbot UI.
- The system must allow users to request additional clarification or further examples/templates.

**Context Awareness**
- The system shall maintain the context of the user’s selected standard or regulatory framework throughout the session.


## 4. Architecture

We have chosen a microservices architecture where each component is structured in layers with a shared database.

This design ensures that each service is a stand-alone product, capable of operating independently as well as integrating into the system's main pipeline.

Using this approach, we can achieve service independence, reusability of the services, and simplified data management.

![Microservices architecture diagram](../../../docs/milestone1/high_lvl_archv3.png)

*Image: High-level microservices architecture showing independent services, a shared database, and communication flows.*