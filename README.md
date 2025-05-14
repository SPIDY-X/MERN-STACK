![image](https://github.com/user-attachments/assets/c13ba010-61ac-492d-97b0-0fd5cac98dbb)
![image](https://github.com/user-attachments/assets/bb217fb8-925a-4d3d-8855-177cb25537d0)

## What Problems I faced with solution.

# Using improper jsx syntax and also wrong use of attributes. 
# Spelling error is one of the major issue which is much cosiderable while using react.
# Misuse of router,toaster.
# in react class and clasName are different(major issue)
1. Improper React Syntax & Structure
Used class instead of className in JSX.

Incorrect use of JSX tags (<Link> was left unclosed in earlier code).

Incorrect destructuring of useState:

js
Copy
Edit
const {user, setUser} = useState(users); // ❌ Wrong
const [user, setUser] = useState(users); // ✅ Correct
2. Incorrect Dynamic Key in Objects
You wrote:

js
Copy
Edit
setUser({ ...user, {name}: value }); // ❌
But it should be:

js
Copy
Edit
setUser({ ...user, [name]: value }); // ✅
3. Broken Routing
App.js had:

jsx
Copy
Edit
<User />  // ❌ Rendered outside routing
<RouterProvider router={route} />
— leading to a double render and potential layout issues.

Also used a non-imported component:

js
Copy
Edit
element: <Update /> // ❌
Instead of:

js
Copy
Edit
import UpdateUser from './update/UpdateUser';
element: <UpdateUser /> // ✅

4. Wrong Import Name from Library
Wrote:

js
Copy
Edit
import { Toster } from 'react-hot-toast'; // ❌
Correct:

js
Copy
Edit
import { Toaster } from 'react-hot-toast'; // ✅
5. Toast Displayed on Every Submit
You used toast.success(...) without validating response.

It was showing even if server failed.

Fix:

js
Copy
Edit
axios.post(...).then(res => {
  if (res.data.success) toast.success(res.data.message);
})
6. CSS Issues
Content overflowed from .userTable and .addUser containers.

Misspelled CSS selectors like:

css
Copy
Edit
.addUserForm.inputGroup lable { ... } // ❌ 'lable'
I helped correct layout using:

css
Copy
Edit
overflow-x: auto;
word-break: break-word;
max-width: 100%;
7. Multiple Unused States
You used two states unnecessarily:

js
Copy
Edit
const [user, setUser] = useState(...);
const [users, setUsers] = useState(user); // ❌ Not needed


## What new things I learned.
>>Correct JSX Syntax in React
>>use of react
>>async operation with axios
>>using react-hot-toast foe feedback
>> also css debugging(same attributes used many time which is not necessary)
>>how to read error (major component)
>>different kind of funtion like arrow function 
>> use of bootcamp
## Other remarks
-after completeing the code just go through it by testing it 
-know how to write
-have patience