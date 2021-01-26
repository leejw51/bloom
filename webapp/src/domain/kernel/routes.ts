/* eslint-disable */
const prefix = 'kernel';
const commands = 'commands';
const queries = 'queries';

export const Commands = {
  acceptGroupInvitation: `/${prefix}/${commands}/accept_group_invitation`,
  cancelGroupInvitation: `/${prefix}/${commands}/cancel_group_invitation`,
  completeRegistration: `/${prefix}/${commands}/complete_registration`,
  completeSignIn: `/${prefix}/${commands}/complete_sign_in`,
  completeTwoFaChallenge: `/${prefix}/${commands}/complete_two_fa_challenge`,
  completeTwoFaSetup: `/${prefix}/${commands}/complete_two_fa_setup`,
  declineGroupInvitation: `/${prefix}/${commands}/decline_group_invitation`,
  deleteMyAccount: `/${prefix}/${commands}/delete_my_account`,
  disableTwoFa: `/${prefix}/${commands}/disable_two_fa`,
  register: `/${prefix}/${commands}/register`,
  signIn: `/${prefix}/${commands}/sign_in`,
  setupTwoFa: `/${prefix}/${commands}/setup_two_fa`,
  updateMyProfile: `/${prefix}/${commands}/update_my_profile`,
}

export const Queries = {
  me: `/${prefix}/${queries}/me`,
  generateQrCode: `/${prefix}/${queries}/generate_qr_code`,
  signedUploadUrl: `/${prefix}/${queries}/signed_upload_url`,
  myGroupInvitations: `/${prefix}/${queries}/my_group_invitations`,
}
