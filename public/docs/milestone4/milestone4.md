# Milestone 4 - Digital Accessibility and Usability

## 1. Goal
This milestone focused on assessing and improving the digital accessibility and usability of our project.
The assessment considered not only interface aesthetics, but whether users with different roles and backgrounds could:

- discover key actions;
- complete realistic compliance tasks;
- understand system feedback;
- and recover safely from errors.

## 2. Evaluated Flows
The usability evaluation covered representative operational flows across multiple personas:

1. Practitioner
	- Create and delete chats.
	- Ask control-focused implementation questions.

2. Compliance Auditor
	- Upload evidence files.
	- Check compliance assessment outcomes.

3. Norm Specialist
	- Review extracted clause data.
	- Manage keywords/relations.
	- Edit implementation guidance and verification status.

4. Organization Admin
	- Create/deactivate/reactivate users.
	- Trigger password reset operations.

5. System Admin
	- Review pending organization requests.
	- Manage organizations and specialist accounts.

## 3. Testing Method and Quantitative Results
The evaluation methodology was defined as follows:

- Method: System Usability Scale (SUS).
- Participants: 13 total.
  - 3 with standards/compliance experience.
  - 10 without standards/compliance experience.
- AI familiarity: all participants reported prior AI chatbot use.
- Final SUS score: approximately 88.

## 4. Main Findings and Pain Points

The main usability issues identified during the evaluation were:

- Discoverability of "create new chat" actions.
- Information overload in the review interface.
- Small text in evidence-related views.
- Some actions visually resembling static status labels.


## 5. What Changed After the Evaluation

### 5.1 Feedback and Status Communication
- User feedback was made clearer through stronger success and error communication patterns.
- Compliance status communication was made more explicit and easier to interpret.

### 5.2 Error Prevention and Recovery
- Error prevention was strengthened for actions with higher risk of accidental changes.
- User recovery paths were improved for cases in which operations fail or require correction.

### 5.3 Findability and Workload Management
- Filtering and organization patterns were improved to reduce search effort in administrative and review workflows.
- Complex tasks were visually grouped to reduce cognitive load and context switching.
- Workflow continuity was improved for longer compliance activities.

## 6. Accessibility and Usability Improvement Priorities
Based on the evaluation outcomes, the next high-impact priorities are:

1. Increase action discoverability in high-frequency flows (especially chat creation and evidence actions).
2. Reduce cognitive load in specialist review through clearer visual hierarchy and grouping.
3. Improve readability in dense data views (font size, spacing, status contrast).

## 7. Milestone Outcome
This Milestone confirms that the prototype is usable across the target roles and achieves a strong SUS result in this iteration.
At the same time, the identified pain points provide clear and actionable guidance for interface refinement before broader deployment and final demonstration stages.