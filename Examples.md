# React Boilerplate Notes

---

## **Link to a Site**

```jsx
<Link to="/">
  <span className="navbar-brand mb-0 h1">React Boilerplate</span>
</Link>
```

---

## **Setting Up a Store**

```jsx
const { store, dispatch } = useGlobalReducer();
```

---

## **Dispatch**

```jsx
dispatch({
  type: "add_task",
  payload: { id: item.id, color: "#ffa500" },
});
```

---

## **Example of API Request Function**

```jsx
const loadMessage = async () => {
  try {
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    if (!backendUrl)
      throw new Error("VITE_BACKEND_URL is not defined in .env file");

    const response = await fetch(backendUrl + "/api/hello");
    const data = await response.json();

    if (response.ok) dispatch({ type: "set_hello", payload: data.message });

    return data;
  } catch (error) {
    if (error.message)
      throw new Error(
        `Could not fetch the message from the backend.
            Please check if the backend is running and the backend port is public.`
      );
  }
};
```

---

## **Creating a Route with Parameters**

```jsx
<Route path="/single/:theId" element={<Single />} />
```

---

## **Using that parameter from inside the page**

```jsx
const { theId } = useParams();
```
