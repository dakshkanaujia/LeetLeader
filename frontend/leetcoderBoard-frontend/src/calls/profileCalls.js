import { axiosInstance} from "./index";

export const getAllProfiles = async () => {
    try {
        const response = await axiosInstance.get('api/users/getAllProfiles');
        return response.data;
    } catch (error) {
        return error.response.data;
    }
}
