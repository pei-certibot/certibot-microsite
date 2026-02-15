# Milestone 3 - Construction

## 1. Usability Testing and Benchmarking
Usability tests were conducted to evaluate the MVP's frontend, specifically assessing the full capabilities of the web interfaces (AI assistant and norm review).

### 1.1. Pre-Testing
Before beginning, participants were briefed on the system's general purpose and their role in the test.

Participants were shown the task list and the running interface, then prompted to start whenever they felt ready. They were encouraged to think aloud throughout the process to help the testers better understand their reasoning.


### 1.2. Tasks

Below is the task information as provided to participants. Since the norm review interface was separated from the main UI in the MVP, the tester manually switched interfaces when required.

> The tasks are carried out continuously (task 2 starts where task 1 ended, for example), in the order here presented. Before starting task 4 you will have to wait for the test giver to change the interface.

**Task 1**
    - You are developing a software service at your company. Create a new chat named “ISO 27001”.

**Task 2**
    - Ask CertiBot how to implement the A.8.5 control about secure authentication, with the necessary context.

**Task 3**
    - Delete the chat you were using.

**Task 4**
    - You are now taking the role of a norm specialist reviewing the information about the normative data. Select the 7.1 clause, write “pretend this is a good guide” on the implementation guide and mark it as verified.

**Task 5**
    - Look at the A.5.20 control. This control is unrelated to A.5.33. Unverify it, remove that relation and add the “information security” keyword, then verify it again.


### 1.3. Task Evaluation
After each task, participants rated its difficulty on a scale from 1 (very hard) to 5 (very easy).

The tester also recorded the following metrics during and after each task:

**Completed?**
    - yes/no

**Max time to execute**
    - Estimated time taken to complete the task

**Number of errors**
    - Actions that go against the task's intended flow/result

**Was lost?**
    - yes/a bit/no

**Asked for help?**
    - yes/no

**Observed difficulty**
    - Difficulty score given by the tester (1-5)

**Notes**
    - Other relevant information



### 1.4. Post-Testing
After completing all tasks, participants filled out a short questionnaire via Google Forms. Each participant was assigned an anonymous identifier to enter at the start of the questionnaire.

The questionnaire gathered demographic data (age, gender, profession) and assessed prior experience with standards and AI chatbots. Participants then completed the standard System Usability Scale (SUS) questions to provide an overall usability score for the interface.



### 1.5. Results
In total, 3 tests were executed, with test takers between the ages of 14 and 57.
The tests were run on a locally deployed version of CertiBot, all on the same computer (13th Gen Intel(R) Core(TM) i7-13620H CPU and Intel UHD Graphics).

Through the testers' observations and the test takers' direct feedback, these problems were found:
- The "create chat" button is too small and easily overlooked.
- The system should recognize which controls the user is asking about without requiring prior selection.
- Chat operation options are easy to miss since they only appear on hover.
- In the norm review interface, the button for adding a new relation or keyword can be overlooked. Some participants typed the keyword in the field without clicking the add button, as it wasn't visible enough.
- AI response times were generally perceived as slow, likely due to the lack of a dedicated GPU on the test hardware.

Participants were unfamiliar with both AI systems and compliance standards—the latter being the primary audience CertiBot aims to support.

The SUS assessment yielded a final score of approximately 70, indicating significant room for improvement.