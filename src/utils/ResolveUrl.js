const ResolveUrl = (path) => {
    const baseUrl =
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000" // Replace with your dev server URL
        : "https://fifthveda.vercel.app"; // Replace with your production domain
    return `${baseUrl}${path}`;
  };
  
  export default ResolveUrl;
  