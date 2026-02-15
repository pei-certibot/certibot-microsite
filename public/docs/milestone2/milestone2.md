# Milestone 2 - Elaboration

## 1. State of the art - LLMs

### Tools in the Market
#### [Phi-3](https://ollama.com/library/phi3):
- **Context window**: 128k
#### Strengths:
- Light model with a focus on reasoning
- Good with long contexts
#### Downsides:
- Older cutoff date for dataset (October 2023)

---

#### [Phi-4](https://ollama.com/library/phi4):
- **Context window**: 16k
#### Strengths:
- Math-focused model
- Small and low latency, good for resource-limited scenarios
#### Downsides:
- Lower context window
- Low scores on benchmarks outside of MMLU indicate over-fitting to achieve its score

---

#### [Gemma 3](https://ollama.com/library/gemma3):
- **Context window**: 32k - 128k
#### Strengths:
- Very lightweight (smallest model has only 270M parameters)
- Good for resource-limited environments
- Performance close to much bigger models

---

#### [DeepSeek-R1](https://ollama.com/library/deepseek-r1):
- **Context window**: 128k - 160k
#### Strengths:
- Distills of other models (Qwen, Llama) give it better reasoning patterns
- Big parameter ranges give it more control over performance

---

#### [Llama3.2](https://ollama.com/library/llama3.2):
- **Context window**: 128k
#### Strengths:
- Multilingual dialogue and summarization
- Small models with similar or better performance than other lightweight models

---

#### [Llama3.3](https://ollama.com/library/llama3.3):
- **Context window**: 128k
#### Strengths:
- Well optimized for multilingual dialogue
#### Downsides:
- Only available with 70B parameters


### Benchmark and comparisons

#### Chatbot arena scores comparison

This image shows that Gemma3 appears to have a similar score to DeepSeek R1 with much less GPU power required.

![chatbot arena gemma3 deepseek-r1](https://ollama.com/assets/library/gemma3/89dc5a19-179e-4dd3-8e5d-12ad54973148)

#### Lightweight model benchmarks

![lightweight models benchmarks](https://ollama.com/assets/library/llama3.2/c1a51716-d8bb-4642-8044-48f5022b777d)

#### LLama3.3 benchmark comparisons

![llama3.3 comparisons](https://ollama.com/assets/library/llama3.3/70cc3470-fa00-4179-b32e-d40d6494ff4e)



### Benchmarks

[DROP](https://llm-stats.com/benchmarks/drop)
[BoolQ](https://llm-stats.com/benchmarks/boolq)
[TruthfulQA](https://llm-stats.com/benchmarks/truthfulqa)
[MMLU](https://llm-stats.com/benchmarks/mmlu)
[MMLU-Pro](https://llm-stats.com/benchmarks/mmlu-pro)
[AlpacaEval 2.0](https://llm-stats.com/benchmarks/alpacaeval-2.0)

| Category | Benchmark | What It Measures | Why It’s Relevant | Desired values |
| - | - | - | - | - |
| Complex reasoning & referencing | HotpotQA, MuSiQue, MultiRC | Multi-hop QA across multiple documents. | Mimics cross-referencing between data sources. | > 75 F1 | 
| Reading comprehension / info retrieval | DROP, BoolQ, SQuAD 2.0 | Extractive QA: can the model find the right span or fact from text? | Good proxy for precision extraction. | > 85 F1 |
| Factual accuracy | TruthfulQA | Tests whether answers are factually correct and not confabulated. | Helps ensure low hallucination rates in extracted data. | > 75% |
| Factual grounding under retrieval | RAGBench (2024) or RAGAS | Tests how well LLMs use retrieved documents without hallucination. | Highly relevant for retrieval-based or reference tasks. | > 80% |
| General reasoning & consistency | MMLU / BBH | Measures broad reasoning ability and structured knowledge use. | Ensures consistent, structured understanding. | > 75% |
| Instruction adherence | MT-Bench, AlpacaEval | Evaluates how well the model follows extraction-style instructions. | Important if you rely on prompt-based schema filling. | > 7.5 (LMSYS) scale |


## 2. Functional Requirements

### 2.1. Chatbot

#### 2.1.1. Input Handling
1. The system must allow users to select a compliance clause from a provided list.
2. The system must allow users to write free-text queries regarding compliance clauses or controls.

#### 2.1.2. Contextual Relevance
3. The chatbot must process the user’s query, identifying the user’s intent and key entities related to regulatory requirements.
4. The chatbot’s answer must be directly relevant to the specific question asked by the user.
5. The chatbot must use the conversation context to tailor responses (e.g., remembering previous user questions within the same session).

#### 2.1.3. Clarification
6. If the chatbot detects ambiguity or missing information in the user's question, it must prompt the user for clarification before providing an answer.

#### 2.1.4. Session Management
7. The chatbot must maintain the context of the conversation during the user’s session to ensure ongoing relevance of responses and follow-ups.

#### 2.1.5. Clause Processing
8. The system must parse selected clauses or user queries to identify the compliance requirement.

#### 2.1.6. Guidance Generation
9. The system must generate step-by-step implementation guidance for the selected or queried clause.
10. The system must ensure that all guidance is written in clear, accessible, and non-legal language.

#### 2.1.7. Examples and Templates
11. The system must provide at least one example or template relevant to the selected compliance standard and clause.
12. The system must tailor examples and templates to match the standard (e.g., ISO 27001, GDPR).

#### 2.1.8. User Interaction
13. The system must present guidance and examples in a conversational format within the chatbot UI.
14. The system must allow users to request additional clarification or further examples/templates.

#### 2.1.9. Context Awareness
15. The system must maintain the context of the user’s selected standard or regulatory framework throughout the session.

#### 2.1.10. Account Authentication
16. The system must provide a login screen requiring registered users to authenticate using their credentials (e.g., username/email and password).
17. The system must verify the user’s credentials and grant access if authentication is successful.
18. The system must display appropriate error messages for failed login attempts.

#### 2.1.11. Access Control
19. Upon successful login, the system must identify the user and provide access to their personalized dashboard.

#### 2.1.12. History Tab Visibility
20. The system must provide a clearly labeled "History" tab accessible from the user's main interface after login.

#### 2.1.13. Persistence of History
21. The system must store each user’s implementation history (actions taken, records created, etc.).
22. The system must store each user’s chat history (messages and conversations with the chatbot).
23. The system must associate all implementation and chat records with the user’s unique account.

#### 2.1.14. History Tab Content
24. The "History" tab must present a chronological or otherwise organized list of the user’s past implementation activities.
25. The "History" tab must present a chronological or otherwise organized list of the user’s previous chats with the chatbot.
26. The system must allow the user to view both implementation and chat histories, either combined or in separate sections, as specified in the UI design.

#### 2.1.15. Security and Privacy
27. The system must ensure that only authenticated users can access their own history tab and associated records.
28. The system must prevent users from viewing or accessing the histories of other users.

---

### 2.2. Norm Review

#### 2.2.1. Mapping Management Interface
1. The system must provide an interface for Compliance Specialists to view, create, edit, approve, or delete information mappings used by the AI.

#### 2.2.2. Validation
2. The system must validate all mapping modifications before saving (e.g., for completeness, uniqueness, integrity, and correct data formats).

#### 2.2.3. Persistence
3. The system must store updated, approved, created, or deleted mappings in a secure and persistent database.

#### 2.2.4. Chatbot Availability
4. The system must ensure that all updated or newly approved mappings are available for chatbot use immediately after successful save.

#### 2.2.5. Audit Logging
5. The system must record all mapping changes (edit, creation, deletion, approval) with user identity and timestamps.

#### 2.2.6. Confirmation & Feedback
6. The system must notify the Compliance Specialist whether the mapping change was saved successfully or if any error occurred.

#### 2.2.7. History Interface
7. The system must provide an interface for Compliance Specialists to view a detailed history of all changes (edits, approvals, deletions, creations) to AI information mappings.

#### 2.2.8. Log Details
8. The system must record, for each mapping change, the user who made the change, the timestamp, and the nature of the change (e.g., what was modified, old and new values).

#### 2.2.9. Chronological Organization
9. The system must display the change history in a readable, chronological order by default.

#### 2.2.10. Traceability
10. The system must enable Compliance Specialists to review the full audit trail of mapping modifications for traceability and compliance purposes.




## 3. Use Cases
#### 3.1 User / Advanced User
![User Use Case Diagram](../../../docs/milestone2/use-cases-user-adv.png)
*Image: Use Case Diagram for User / Advanced User.*
#### 3.2 Administrator
![Administrator Use Case Diagram](../../../docs/milestone2/use-cases-admin.png)
*Image: Use Case Diagram for Administrator.*

## 4. Workflow Diagrams
### 4.1 Authentication Process
![Authentication Process](../../../docs/milestone2/authentication-process.png)
*Image: Authentication Process Workflow Diagram.*

## 5. Database Design
![Relational Database Design](../../../docs/milestone2/rdb-DER.png)



![Relational Database Design](../../../docs/milestone2/rdb-ER.png)
*Images: Relational Database Design Diagrams.*


## 6. Architecture Design
### 6.1 Component-Level Diagram
![Component-Level Architecture](../../../docs/milestone2/components-arch.png)
*Image: Component-Level Architecture Diagram.*
### 6.2 Container-Level Diagram
![Container-Level Architecture](../../../docs/milestone2/containers-arch.png)
*Image: Container-Level Architecture Diagram.*
## 7. Mockups and UI Design
During this milestone, we have tried a new approach to the UI design. We thought that it would be a great idea to create a "Zero-Layer" / Tiling interface for our project.
This means that, in every single view, the user will be able to interact with the application through a series of tiles that can be resized, to fit the user's needs.

![Mockup - Tiling Version](../../../docs/milestone2/chatbot.png)

*Image: View of the chatbot interface.*