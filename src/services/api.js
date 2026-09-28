const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

/**
 * Generic API request
 */
async function apiRequest(endpoint, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    ...options,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Something went wrong.");
  }

  return data;
}

/**
 * Get all resources
 */
export async function getResources() {
  return apiRequest("/resources");
}

/**
 * Get single resource
 */
export async function getResource(slug) {
  return apiRequest(`/resources/${slug}`);
}

/**
 * Get all blogs
 */
export async function getBlogs() {
  return apiRequest("/blogs");
}

/**
 * Get single blog
 */
export async function getBlog(slug) {
  return apiRequest(`/blogs/${slug}`);
}

/**
 * Get all case studies
 */
export async function getCaseStudies() {
  return apiRequest("/case-studies");
}

/**
 * Get single case study
 */
export async function getCaseStudy(slug) {
  return apiRequest(`/case-studies/${slug}`);
}

/**
 * Submit contact form
 */
export async function submitContact(formData) {
  return apiRequest("/contact", {
    method: "POST",
    body: JSON.stringify(formData),
  });
}

/**
 * Subscribe to newsletter
 */
export async function subscribeNewsletter(email) {
  return apiRequest("/newsletter", {
    method: "POST",
    body: JSON.stringify({
      email,
    }),
  });
}

/**
 * Submit resource download lead
 */
export async function submitResourceDownload(data) {
  return apiRequest("/resource-download", {
    method: "POST",
    body: JSON.stringify(data),
  });
}