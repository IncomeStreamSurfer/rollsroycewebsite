'use server';

import { supabase } from '../../utils/supabase';

export async function submitContactForm(formData: FormData) {
  try {
    const { error } = await supabase
      .from('contact_submissions')
      .insert({
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string || null,
        service: formData.get('service') as string,
        date: formData.get('date') as string || null,
        location: formData.get('location') as string || null,
        message: formData.get('message') as string,
        locale: formData.get('locale') as string
      });

    if (error) throw error;
    return { success: true };
  } catch (error) {
    console.error('Error submitting form:', error);
    return { success: false, error };
  }
}
