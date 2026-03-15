# Customer Support Zone

Customer Support Zone is a React-based web application designed to manage and track customer support tickets. The application allows users to view customer tickets, track their progress, and mark them as resolved.

The UI is built based on a Figma design and includes additional functionality such as ticket status management, toast notifications, and responsive layouts for mobile devices.

---

## 🚀 Features 
## [video explaination] (https://youtu.be/0whrgK3Kf1w)
### Navbar
- Website name/logo on the left
- Menu items and **New Ticket** button on the right

### Banner
- Designed according to the provided Figma design
- Linear gradient background
- Displays ticket statistics:
  - **In Progress Count**
  - **Resolved Count**

### Main Section

#### JSON Data
- Contains **10–15 customer tickets**
- Each ticket includes:
  - `id`
  - `title`
  - `description`
  - `customer`
  - `priority`
  - `status`
  - `createdAt`

#### Ticket Cards
- All tickets displayed in a **card layout**
- Cards arranged in a **2-column grid**
- Each card displays ticket information

#### Task Status Section
- Clicking a ticket card:
  - Adds the ticket to the **Task Status Section**
  - Increases **In Progress count**
  - Shows a **toast notification**

Task Status displays:
- Ticket Title
- **Complete Button**

Clicking **Complete Button**:
- Shows toast notification
- Removes ticket from **Task Status**
- Adds ticket to **Resolved List**
- Decreases **In Progress count**
- Increases **Resolved count**
- Removes ticket from **Customer Tickets list**

---

### Footer
- Designed according to the Figma design

---

## 📱 Responsiveness

The entire website is fully responsive and optimized for:

- Mobile devices
- Tablets
- Desktop screens

---

## 🔔 Toast Notifications

This project uses **React-Toastify** to display stylish toast notifications instead of default alerts.

Features include:
- Success notifications
- Task completion notifications
- Status updates

---

## 🧰 Technology Stack

- **HTML**
- **CSS / Tailwind CSS**
- **JavaScript**
- **React.js**

Additional Library:
- **React Toastify**

---

# 📚 React Concepts

## What is JSX, and why is it used?

JSX (JavaScript XML) is a syntax extension for JavaScript that allows developers to write HTML-like code inside JavaScript. It makes React components easier to write and understand because the UI structure can be written in a familiar HTML format.

JSX is used because it improves readability and allows React to efficiently update the DOM using its virtual DOM system.

---

## What is the difference between State and Props?

**Props (Properties)**  
- Used to pass data from parent components to child components
- Immutable (cannot be changed by the child component)

**State**  
- Managed inside a component
- Can change over time
- Used for dynamic data such as user interactions or API responses

---

## What is the useState hook, and how does it work?

`useState` is a React Hook that allows functional components to manage state.

Example:

```javascript
const [count, setCount] = useState(0);
count is the current state value
setCount is a function used to update the state
When state changes, React automatically re-renders the component
```


## How can you share state between components in React?

 ### State can be shared between components using several methods:

- Lifting State Up

- Move the state to the nearest common parent component

- Pass it down using props

- Context API

- Used for global state management



## How is event handling done in React?

React handles events using camelCase syntax and JavaScript functions.

Example:
```
<button onClick={handleClick}>Click Me</button>

function handleClick() {
  console.log("Button clicked");
}
```

## 📦 Installation & Setup

- Clone the repository:
```
git clone https://github.com/developerMohib/cs-ticket.git
```

- Navigate to the project directory:
```
cd cs-ticket
```

- Install dependencies:
```
npm install
```

- Run the development server:
```
npm run dev
```