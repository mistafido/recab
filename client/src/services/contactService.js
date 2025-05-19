import axiosInstance from "../utils/axios";

export const createContacts = async (contactsData) => {
    try {
        const response = await axiosInstance.post("api/emergencyContacts/create_emergency_contacts", contactsData);
        return response.data;
    } catch (error) {
        throw error.response?.data || "Failed to Create Emergency Contacts";
    }
}