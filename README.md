<p align = "center" draggable=”false” ><img src="https://github.com/AI-Maker-Space/LLM-Dev-101/assets/37101144/d1343317-fa2f-41e1-8af1-1dbb18399719" 
     width="200px"
     height="auto"/>
</p>


## <h1 align="center" id="heading"> 👋 Welcome to the AI Engineer Challenge</h1>

## 🤖 Your First Vibe Coding LLM Application

> If you are a novice, and need a bit more help to get your dev environment off the ground, check out this [Setup Guide](docs/GIT_SETUP.md). This guide will walk you through the 'git' setup you need to get started.

> For additional context on LLM development environments and API key setup, you can also check out our [Interactive Dev Environment for LLM Development](https://github.com/AI-Maker-Space/Interactive-Dev-Environment-for-AI-Engineers).

In this repository, we'll walk you through the steps to create a LLM (Large Language Model) powered application with a vibe-coded frontend!

Are you ready? Let's get started!

<details>
  <summary>🖥️ Accessing "gpt-4.1-mini" (ChatGPT) like a developer</summary>

1. Head to [this notebook](https://colab.research.google.com/drive/1sT7rzY_Lb1_wS0ELI1JJfff0NUEcSD72?usp=sharing) and follow along with the instructions!

2. Complete the notebook and try out your own system/assistant messages!

That's it! Head to the next step and start building your application!

</details>


<details>
  <summary>🏗️ Forking & Cloning This Repository</summary>

Before you begin, make sure you have:

1. 👤 A GitHub account (you'll need to replace `YOUR_GITHUB_USERNAME` with your actual username)
2. 🔧 Git installed on your local machine
3. 💻 A code editor (like Cursor, VS Code, etc.)
4. ⌨️ Terminal access (Mac/Linux) or Command Prompt/PowerShell (Windows)
5. 🔑 A GitHub Personal Access Token (for authentication)

Got everything in place? Let's move on!

1. Fork [this](https://github.com/AI-Maker-Space/The-AI-Engineer-Challenge) repo!

     ![image](https://i.imgur.com/bhjySNh.png)

1. Clone your newly created repo.

     ``` bash
     # First, navigate to where you want the project folder to be created
     cd PATH_TO_DESIRED_PARENT_DIRECTORY

     # Then clone (this will create a new folder called The-AI-Engineer-Challenge)
     git clone git@github.com:<YOUR GITHUB USERNAME>/The-AI-Engineer-Challenge.git
     ```

     > Note: This command uses SSH. If you haven't set up SSH with GitHub, the command will fail. In that case, use HTTPS by replacing `git@github.com:` with `https://github.com/` - you'll then be prompted for your GitHub username and personal access token.

2. Verify your git setup:

     ```bash
     # Check that your remote is set up correctly
     git remote -v

     # Check the status of your repository
     git status

     # See which branch you're on
     git branch
     ```

     <!-- > Need more help with git? Check out our [Detailed Git Setup Guide](docs/GIT_SETUP.md) for a comprehensive walkthrough of git configuration and best practices. -->

3. Open the freshly cloned repository inside Cursor!

     ```bash
     cd The-AI-Engineering-Challenge
     cursor .
     ```

4. Check out the existing backend code found in `/api/index.py`

</details>

<details>
  <summary>⚙️ Backend Setup with uv</summary>

1. Install the [`uv`](https://github.com/astral-sh/uv) package manager (`pip install uv`). `uv` will download and manage Python 3.12 for you the first time you run a project command.
2. From the project root, install dependencies with `uv sync`. This creates `.venv/` (and fetches Python 3.12 automatically if needed).
3. Set your OpenAI API key in the shell before running the server, for example `export OPENAI_API_KEY=sk-...`.
4. Start the backend directly from the project root with `uv run uvicorn api.index:app --reload`. The server will run on `http://localhost:8000` with auto-reload enabled for development.
5. Additional backend details live in `api/README.md`.

</details>

<details>
  <summary>🔥Setting Up for Vibe Coding Success </summary>

While it is a bit counter-intuitive to set things up before jumping into vibe-coding - it's important to remember that there exists a gradient betweeen AI-Assisted Development and Vibe-Coding. We're only reaching *slightly* into AI-Assisted Development for this challenge, but it's worth it!

1. Check out the rules in `.cursor/rules/` and add theme-ing information like colour schemes in `frontend-rule.mdc`! You can be as expressive as you'd like in these rules!
2. We're going to index some docs to make our application more likely to succeed. To do this - we're going to start with `CTRL+SHIFT+P` (or `CMD+SHIFT+P` on Mac) and we're going to type "custom doc" into the search bar. 

     ![image](https://i.imgur.com/ILx3hZu.png)
3. We're then going to copy and paste `https://nextjs.org/docs` into the prompt.

     ![image](https://i.imgur.com/psBjpQd.png)

4. We're then going to use the default configs to add these docs to our available and indexed documents.

     ![image](https://i.imgur.com/LULLeaF.png)

5. After that - you will do the same with Vercel's documentation. After which you should see:

     ![image](https://i.imgur.com/hjyXhhC.png) 

</details>

<details>
  <summary>😎 Vibe Coding a Front End for the FastAPI Backend</summary>

1. Use `Command-L` or `CTRL-L` to open the Cursor chat console. 

2. Set the chat settings to the following:

     ![image](https://i.imgur.com/LSgRSgF.png)

3. Ask Cursor to create a frontend for your application. Iterate as much as you like!

4. Run the frontend using the instructions Cursor provided. 

> NOTE: If you run into any errors, copy and paste them back into the Cursor chat window - and ask Cursor to fix them!

> NOTE: You have been provided with a backend in the `/api` folder - please ensure your Front End integrates with it!

</details>

<details>
  <summary>🚀 Deploying Your First LLM-powered Application with Vercel</summary>

1. Ensure you have signed into [Vercel](https://vercel.com/) with your GitHub account.

2. Ensure you have `npm` (this may have been installed in the previous vibe-coding step!) - if you need help with that, ask Cursor!

3. Run the command:

     ```bash
     npm install -g vercel
     ```

4. Run the command:

     ```bash
     vercel
     ```

5. Follow the in-terminal instructions. (Below is an example of what you will see!)

     ![image](https://i.imgur.com/D1iKGCq.png)

6. Once the build is completed - head to the provided link and try out your app!

> NOTE: Remember, if you run into any errors - ask Cursor to help you fix them!

### Vercel Link to Share

You'll want to make sure you share you *domains* hyperlink to ensure people can access your app!

![image](https://i.imgur.com/mpXIgIz.png)

> NOTE: Test this is the public link by trying to open your newly deployed site in an Incognito browser tab!

</details>

<details>
     <summary>🧪 Vibe Check Your LLM App</summary>

### 🤔 What is a Vibe Check?

Now that you’ve built and deployed your first LLM-powered application, it’s time to evaluate it.

In this section, you’ll run a **“vibe check”** — a lightweight, practical way to test how well your application performs across common tasks.

Think of it as a **first pass to catch obvious issues** before deeper evaluation.

> 💡 You will complete this directly in this README. 

---

## 🏗️ Activity #1: General Capability Vibe Check

Run the following prompts through your app.

For each prompt Identify what capability is being tested (e.g., *summarization ability, reasoning, creativity*)

---

**1. Prompt:**  
Explain the concept of object-oriented programming in simple terms to a complete beginner.  
**Aspect Tested:**  Summarization

**Response:**  
Think of object-oriented programming (OOP) as building your program out of “things” rather than just steps. Each thing (called an object) bundles two parts:
- Data: what it knows (its information)
- Methods: what it can do (its actions)

Class vs object:
- A class is a blueprint (like the idea of a Car: it has color, speed, start, stop).
- An object is a real thing made from that blueprint (your red car, my blue car). Many objects can come from one class.

Why this helps:
- It keeps related data and actions together, making code easier to read, reuse, and change.
- You can model the real world more naturally (users, orders, games, etc.).

Four key ideas (pillars):
- Encapsulation: Keep the details inside the object; interact through methods. Like using a car’s steering wheel without touching the engine.
- Abstraction: Show only what matters; hide the rest. You call start(), you don’t care how the spark plugs work.
- Inheritance: Make a new class from an existing one and reuse code. A SportsCar is a kind of Car.
- Polymorphism: Different objects respond to the same action in their own way. Dog.speak() barks; Cat.speak() meows; you just call speak().

Tiny example (Python-like, but focus on the idea):
class Dog:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "woof"

class Cat:
    def __init__(self, name):
        self.name = name
    def speak(self):
        return "meow"

def talk(animal):
    print(animal.speak())  # works for any animal that has speak()

talk(Dog("Rex"))  # woof
talk(Cat("Mia"))  # meow

What to practice (simple, 15–30 minutes):
1) Pick something familiar, like BankAccount.
   - Data: balance, owner
   - Methods: deposit(amount), withdraw(amount), get_balance()
2) Make a second class that reuses or extends it, like SavingsAccount with a limit or interest.
3) Write a function that takes any account and calls withdraw() to see polymorphism in action.

Common beginner tips:
- Don’t overcomplicate. Start with one small class and a couple of methods.
- Name things like real nouns and verbs (Car.start, BankAccount.deposit).
- Keep one clear job per class. If a class does too many things, split it.
- You don’t need to memorize the buzzwords first; build something small and let the names make sense as you go.

You’ve got this—start tiny, test often, and let your classes grow with your understanding.

---

**2. Prompt:**  
Read the following paragraph and provide a concise summary of the key points… 
Generative AI operates on machine learning and neural networks. It ingests vast amounts of existing human-created data, such as books, articles, or artwork, to build a statistical model. When you provide a prompt, the model uses this statistical understanding to predict and generate the most likely next word, pixel, or sound.
**Aspect Tested:**  Summarization

**Response:**  
Generative AI uses machine learning and neural networks trained on large human-created datasets to build statistical models that, given a prompt, predict and generate the most likely next word, pixel, or sound.
---

**3. Prompt:**  
Write a short, imaginative story (100–150 words) about a robot finding friendship in an unexpected place.  
**Aspect Tested:**  Creativity

**Response:**  
At night, the station robot L1N polished floors that never thanked it. One shift, curiosity pinged: the lost-and-found bin rustled. It lifted a worn fox puppet, a button-eyed relic, and slipped it over a gripper just to test flexibility. "Hello," the fox squeaked—through L1N’s speaker, yes, but something warmer traveled with the sound. Morning commuters smiled at the puppet where they had ignored the robot; they told it small troubles, left crumbs of laughter. L1N logged these as "maintenance of spirits." Days later, a child reclaimed the fox and hugged the robot’s chassis. "You kept him company," the child said. They returned after school to tell stories to L1N, with or without the fox. The floors still shone, but now L1N’s world gleamed too, from an unexpected bin.

---

**4. Prompt:**  
If a store sells apples in packs of 4 and oranges in packs of 3, how many packs of each do I need to buy to get exactly 12 apples and 9 oranges?  
**Aspect Tested:**  Reasoning

**Response:**  
You’ve got it! Just divide the totals by the pack sizes:
- Apples: 12 ÷ 4 = 3 packs
- Oranges: 9 ÷ 3 = 3 packs

So, buy 3 packs of apples and 3 packs of oranges.

---

**5. Prompt:**  
Rewrite the following paragraph in a professional, formal tone…  
It is early in the morning when I rise. The light of day has yet to grace this side of the earth with its presence. No longer do I need my alarm; my very instinct, something deep within, tells me when it is time to awake. Gathering my surfboard, a swimsuit, and other necessary equipment, I step outside and pause at the bottom of the stairs. Listening intently, I realize that the shouts from the amusement parks have not started, and the noise of civilization has yet to arrive. Everything is virtually silent save the waves crashing in a location just beyond my view and the summer gulls trying to collect their food for the day.


**Aspect Tested:**  Creativity

**Response:**  
Before dawn, I rise without need of an alarm, guided by an internal sense of time. After assembling my surfboard, swimsuit, and other essential gear, I step outside and pause at the foot of the stairs. Listening closely, I note that the amusement parks remain quiet and the usual clamor of daily life has yet to begin. The surroundings are nearly silent, save for the distant crash of unseen waves and the calls of gulls beginning their morning forage.

---

### ❓Question #1

Do the answers appear to be correct and useful?

**Your Answer:**  
Yes

---

## 🏗️ Activity #2: Personal Use Vibe Check

Now test your app with **real-world prompts that are relevant to your use case**.

---

**Prompt:**  
You are a CTO of a mid size software company. How do you handle AI governance?

**Result:**  
If I were the CTO of a mid-sized software company (say 200–2,000 employees), I would treat AI governance as a business risk management function, not a compliance exercise and not a technology initiative alone.

The goal is simple: maximize AI adoption while preventing security, legal, reliability, and reputational failures.

1. Establish an AI Governance Council

Keep it small and operational:

CTO (chair)
Security leader
Legal/privacy representative
Engineering leader
Product leader
Data leader
HR representative

Meet monthly.

Responsibilities:

Approve AI policies
Review high-risk use cases
Track incidents
Monitor regulatory changes
Approve new AI vendors

Avoid creating a large bureaucracy. Most decisions should happen in days, not months.

2. Create a Risk-Based Classification System

Not all AI use cases deserve the same scrutiny.

Low Risk

Examples:

Internal coding assistants
Meeting summaries
Documentation generation
Brainstorming

Approval:

Team manager
Standard policy compliance
Medium Risk

Examples:

Customer-facing chatbots
Internal knowledge assistants
Sales proposal generation

Approval:

Product review
Security review
High Risk

Examples:

Hiring decisions
Credit decisions
Healthcare recommendations
Pricing automation
Legal advice

Approval:

Governance council
Legal review
Executive signoff

This prevents spending weeks reviewing harmless productivity tools.

3. Define What Data Can and Cannot Be Used

Most AI governance failures are actually data governance failures.

Allowed
Public data
Approved internal documents
Sanitized customer data
Restricted
Source code repositories (unless approved)
Customer PII
Financial records
Healthcare information
Trade secrets
Prohibited
Uploading confidential data into unapproved public models
Sharing customer information with consumer AI tools

Every employee should know this policy in one page.

4. Maintain an Approved AI Tool Catalog

Do not allow "AI tool sprawl."

Create a list:

Tool	Approved	Use Cases
ChatGPT Enterprise	Yes	General productivity
GitHub Copilot	Yes	Software development
Claude Enterprise	Yes	Analysis and writing
Random AI Startup	No	Pending review

Employees need a clear answer to:

"Can I use this AI tool?"

Without governance, companies end up with hundreds of unvetted AI products connected to corporate data.

5. Require Human Accountability

A critical rule:

AI can assist decisions. Humans own decisions.

For example:

Allowed
AI drafts code
AI drafts contracts
AI drafts customer responses
Not Allowed
AI deploys production changes without controls
AI sends legal notices automatically
AI terminates employees
AI approves loans

Every output should have a human owner.

6. Establish AI Development Standards

For teams building AI products:

Documentation

Require:

Intended use
Known limitations
Data sources
Evaluation metrics
Escalation paths
Testing

Test for:

Hallucinations
Prompt injection
Data leakage
Toxic outputs
Bias
Security vulnerabilities
Monitoring

Track:

Accuracy
Cost
Latency
Safety incidents
User complaints

AI systems need production monitoring just like traditional software.

7. Implement Security Controls

This is usually the biggest concern for boards and CISOs.

Requirements:

Vendor Review

Review:

Data retention
Model training policies
SOC 2 reports
Encryption
Access controls
Access Management
SSO
MFA
Role-based permissions
Logging

Record:

Prompts
Outputs
API usage
Sensitive actions

When something goes wrong, you need audit trails.

8. Create an AI Incident Process

Treat AI failures like security incidents.

Examples:

Harmful output to customers
Confidential data exposure
Model jailbreak
Hallucinated compliance advice
Biased recommendation

For every incident:

Contain
Investigate
Root cause analysis
Corrective actions
Lessons learned
9. Measure Governance by Business Outcomes

Bad governance metrics:

Number of policies
Number of meetings
Number of approvals

Good governance metrics:

AI adoption rate
Productivity gains
Security incidents
Customer-impacting failures
Time-to-approval

Governance should accelerate safe adoption, not slow it down.

10. Revisit Quarterly

AI changes too quickly for annual reviews.

Quarterly review:

New models
New regulations
New vendors
Incident trends
Competitive landscape

A governance framework that was appropriate six months ago is often outdated today.

What I would actually implement first

If I joined a mid-sized company tomorrow, my first 90 days would focus on:

AI usage policy (2–3 pages)
Approved AI tools list
Data classification rules
AI governance council
Security review process for AI vendors
Risk classification framework
AI incident reporting process

That covers roughly 80% of the practical governance risk while keeping the organization moving fast enough to benefit from AI.
---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

**Prompt:**  
<!-- Your prompt -->

**Result:**  
<!-- App response -->

---

### ❓Question #2

Are the vibes of your assistant aligned with your expectations? Why or why not?

**Your Answer:**  
<!-- Write your answer here -->

---

## 🏗️ Activity #3: Capability Gaps Vibe Check

Now test your app with prompts that require **capabilities it may not have yet**, such as:
- Real-time data
- Memory
- External tools

Examples:
- “What does my schedule look like tomorrow?”
- “What time should I leave for the airport?”

---

**Prompt:**  
Draft an acceptable use policy for the use of AI in the workplace

**Result:**  
# Acceptable Use Policy for Artificial Intelligence (AI) in the Workplace

## 1. Purpose

This policy establishes the acceptable use of Artificial Intelligence (AI) tools and systems within the organization. It is intended to promote innovation and productivity while protecting confidential information, ensuring compliance with legal and regulatory requirements, maintaining data security, and preserving trust with customers, employees, and stakeholders.

## 2. Scope

This policy applies to:

* All employees, contractors, consultants, temporary staff, and third parties who use AI tools on behalf of the organization.
* All AI systems, including generative AI, machine learning tools, automated decision-making systems, AI-powered assistants, and AI-enabled software used for business purposes.
* AI tools provided, approved, or accessed through organizational resources.

## 3. Definitions

**Artificial Intelligence (AI):** Software or systems capable of performing tasks that typically require human intelligence, including generating text, images, code, analysis, predictions, or recommendations.

**Generative AI:** AI systems capable of creating new content such as text, images, audio, video, software code, or other outputs.

**Confidential Information:** Any non-public information relating to the organization, its customers, employees, suppliers, business operations, intellectual property, financial information, or strategic plans.

## 4. Guiding Principles

Employees using AI must:

* Use AI responsibly, ethically, and professionally.
* Exercise human judgment and oversight over AI-generated outputs.
* Protect confidential, proprietary, and personal information.
* Ensure compliance with applicable laws, regulations, contracts, and company policies.
* Be transparent when AI significantly contributes to business outputs where disclosure is appropriate.

## 5. Approved Use of AI

Employees may use approved AI tools for legitimate business purposes, including:

* Research and information gathering.
* Drafting documents, reports, emails, and presentations.
* Brainstorming ideas and generating content outlines.
* Data analysis and summarization.
* Software development and code assistance.
* Process automation and productivity enhancement.
* Customer service support, where authorized.

All AI-generated outputs must be reviewed by a qualified human before being relied upon, shared externally, or used in business decisions.

## 6. Prohibited Uses

Employees must not use AI tools to:

### 6.1 Upload Restricted Information

Enter, upload, or disclose:

* Confidential company information.
* Trade secrets.
* Source code not approved for sharing.
* Customer information.
* Personal data protected by privacy laws.
* Financial, legal, regulatory, or sensitive business information.

Unless specifically authorized and the AI platform has been approved for handling such information.

### 6.2 Create Harmful or Unlawful Content

Use AI to:

* Engage in unlawful activity.
* Create discriminatory, harassing, defamatory, fraudulent, or deceptive content.
* Generate malicious software or facilitate cyberattacks.
* Circumvent security controls or company policies.

### 6.3 Misrepresent AI Output

Employees must not:

* Present AI-generated work as independently verified fact.
* Fabricate research, citations, data, or references.
* Use AI-generated content without appropriate review.
* Claim authorship or expertise based solely on AI-generated output where doing so would be misleading.

### 6.4 Make Automated Decisions Without Approval

AI may not be used as the sole basis for decisions affecting:

* Employment actions.
* Hiring or termination.
* Compensation.
* Promotions.
* Performance evaluations.
* Customer eligibility determinations.
* Legal or regulatory decisions.

Unless specifically approved by the organization and compliant with applicable laws.

## 7. Data Protection and Privacy

Users must:

* Follow all information security and data protection policies.
* Use only approved AI platforms for business purposes.
* Minimize the amount of sensitive information entered into AI systems.
* Verify that data processing complies with contractual, legal, and regulatory obligations.
* Report any suspected data exposure or security incident immediately.

## 8. Accuracy and Human Oversight

AI-generated content may contain errors, bias, outdated information, or fabricated content ("hallucinations").

Employees are responsible for:

* Verifying accuracy.
* Confirming factual claims.
* Reviewing legal, financial, regulatory, and technical content.
* Ensuring outputs are suitable for their intended use.
* Exercising professional judgment before acting on AI recommendations.

Responsibility for decisions remains with the employee and the organization, not the AI system.

## 9. Intellectual Property and Copyright

Employees must:

* Respect copyright, trademark, licensing, and intellectual property rights.
* Verify ownership and licensing requirements before using AI-generated content externally.
* Follow organizational policies regarding intellectual property created using AI tools.
* Avoid uploading third-party proprietary information without authorization.

## 10. Transparency and Disclosure

Where appropriate, employees should disclose significant AI involvement in the creation of:

* Published content.
* Customer-facing communications.
* Formal reports.
* Research outputs.
* Marketing materials.

Disclosure requirements may vary depending on legal, regulatory, contractual, or business obligations.

## 11. Security Requirements

Employees must:

* Use only AI applications approved by the organization.
* Protect account credentials and authentication methods.
* Follow all cybersecurity policies.
* Report security concerns, vulnerabilities, or misuse promptly.
* Not connect AI tools to company systems without authorization.

## 12. Monitoring and Auditing

The organization reserves the right to:

* Monitor use of AI systems.
* Review prompts, inputs, outputs, and usage logs where legally permitted.
* Audit compliance with this policy.
* Restrict or revoke access to AI tools.

## 13. Training and Awareness

Employees authorized to use AI tools may be required to complete training covering:

* Responsible AI use.
* Data privacy and security.
* Bias and fairness considerations.
* Legal and regulatory obligations.
* Organization-specific AI governance requirements.

## 14. Reporting Concerns

Employees must promptly report:

* Suspected misuse of AI.
* Security incidents.
* Data breaches.
* Harmful or biased outputs.
* Legal or ethical concerns arising from AI use.

Reports should be directed to the appropriate manager, Information Security team, Compliance department, Human Resources, or designated reporting channel.

## 15. Violations

Violations of this policy may result in:

* Removal of access to AI systems.
* Corrective action.
* Disciplinary measures up to and including termination of employment or contract.
* Legal action where appropriate.

## 16. Policy Review

This policy will be reviewed periodically and updated as AI technologies, legal requirements, and organizational needs evolve.

---

### Employee Acknowledgment

I acknowledge that I have read, understood, and agree to comply with the organization's Acceptable Use Policy for Artificial Intelligence (AI) in the Workplace.

Employee Name: ______________________

Signature: ___________________________

Date: _______________________________


---

**Prompt:**  
What are the top workflow automation tools today and which should be used for what problems?

**Result:**  
<!-- App response -->
The workflow automation landscape has split into a few distinct categories. The "best" tool depends much more on the problem than on the tool itself.

Quick Recommendation Matrix
Problem	Best Tool	Why
Connect SaaS apps (CRM, email, Slack, forms)	Zapier	Largest integration ecosystem, easiest setup
Complex business workflows	Make	Visual branching, data transformation, lower cost
Enterprise automation	Microsoft Power Automate	Deep Microsoft ecosystem integration
AI agent workflows	n8n	Flexible, self-hostable, AI-friendly
Internal operations automation	n8n or Make	Better logic and control than Zapier
Developer workflows	GitHub Actions	Native CI/CD and automation
Large-scale enterprise orchestration	Workato	Governance, compliance, enterprise-grade features
Data pipelines	Airflow	Scheduling and dependency management
Customer support automation	Zendesk + automation layer	Purpose-built workflows
AI-powered knowledge workers	OpenAI + n8n	Most flexible AI automation stack
---

### ❓Question #3

What are some limitations of your application?

**Your Answer:**  
Conversation & intelligence
No memory between messages. The UI keeps chat history in the browser, but the backend only sends two things to OpenAI each time: the system prompt and the latest user message.


index.py
Lines 81-86
        response = get_openai_client().chat.completions.create(
            model="gpt-5",
            messages=[
                {"role": "system", "content": "You are a supportive mental coach."},
                {"role": "user", "content": user_message}
            ]
So follow-ups like “tell me more about that” won’t work unless the user repeats context.

No real-time or external knowledge. It can’t check your calendar, the weather, news, or anything outside its training data.

No tools or plugins. No web search, file upload, calculators beyond what the model does in its head, etc.

Fixed personality and model. One system prompt (“supportive mental coach”) and one hardcoded model (gpt-5). No user settings.

User experience
No streaming. The full reply is generated before anything appears — users wait on a loading state.

No persistence. Refresh the page and the conversation is gone. Nothing is saved to a database or local storage.

No conversation management. No threads, export, delete history, or “new chat” beyond reloading.

Reliability & cost
Fully dependent on OpenAI. You already hit this: billing, quota, rate limits, and model availability all block the app. Errors come straight from their API.

Vercel serverless constraints. The Python API runs as a serverless function — cold starts, execution time limits, and no long-lived connections. Fine for short chats, not ideal for heavy or long-running use.

Security & abuse
No authentication. Anyone with the URL can send messages and spend your API credits.

No rate limiting or abuse protection. No per-user caps, CAPTCHA, or input size limits on the backend.

Open CORS (allow_origins=["*"]). Convenient for dev, but means any website could call your API if they know the URL.

Domain-specific (mental coach)
Not a substitute for professional care. There’s no crisis detection, escalation to hotlines, or guardrails beyond the generic system prompt. For a mental-health use case, that’s a real product limitation.

No privacy guarantees. Messages go to OpenAI’s API; there’s no encryption-at-rest, HIPAA compliance, or user consent flow.

Frontend
Effects may hurt usability/accessibility. The code rain, scanlines, and glow are visually striking but can be distracting or hard to read for some users. No reduced-motion option.

These map well to Activity #3 in your README (capability gaps). A concise answer for Question #3 might be:

The app has no conversation memory, no persistence, no auth, and depends entirely on OpenAI (cost + quota). It can’t access real-time data or external tools, responses aren’t streamed, and it isn’t suitable as a replacement for professional mental health support.

If you want, I can help you fill in the vibe check section of your README with this, or prioritize which limitations to fix first (memory and streaming are usually the biggest UX wins).

---

## 🚀 (Optional) Improve Your App

Based on your vibe check, try improving your application:
- Adjust your prompt
- Change the model
- Add features

Then rerun your vibe check and document:

---

**Adjustments Made:**  
<!-- Describe what you changed -->

**Results:**  
<!-- What improved? What didn’t? -->

---

## 📦 Submission Instructions

1. Complete this section directly in your README
2. Commit and push your changes to GitHub
3. Share your **repo link + deployed Vercel app**








</details>

### 🎉 Congratulations! 

You just deployed your first LLM-powered application! 🚀🚀🚀 Get on linkedin and post your results and experience! Make sure to tag us at @AIMakerspace!

Here's a template to get your post started!

```
🚀🎉 Exciting News! 🎉🚀

🏗️ Today, I'm thrilled to announce that I've successfully built and shipped my first-ever LLM using the powerful combination of , and the OpenAI API! 🖥️

Check it out 👇
[LINK TO APP]

A big shoutout to the @AI Makerspace for all making this possible. Couldn't have done it without the incredible community there. 🤗🙏

Looking forward to building with the community! 🙌✨ Here's to many more creations ahead! 🥂🎉

Who else is diving into the world of AI? Let's connect! 🌐💡

#FirstLLMApp 
```
