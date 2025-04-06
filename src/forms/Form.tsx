export default function Form() {
  return (
    <form>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" name="name" />
      <button type="submit">Submit</button>
    </form>
  );
}