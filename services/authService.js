// src/services/authService.js
import { supabase } from '../api/supabaseClient'; // Centralized client

export const loginWithGitHub = async () => {
    try {
        const { error } = await supabase.auth.signInWithOAuth({
            provider: 'github',
            options: {
                redirectTo: window.location.origin + '/dashboard.html'
            }
        });
        if (error) throw error;
    } catch (error) {
        // Centralized Notification System ???????????
        showEnterpriseNotification('Error', 'Login failed: ' + error.message);
    }
};