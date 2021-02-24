import MailGen from 'mailgen';
import sgMail from '@sendgrid/mail';

/**
 * this is a service dealing with sending email to the user
 */
class MailService {
	/**
   * @param {string} name
   * @param {string} email
   * @param {object} token
   * @return {object} this is going to send an email containing a token to verify
   */
	static sendMail(name, email, token) {
		const emailToSend = {
			body: {
				name,
				intro: 'you registered an account on Visit africa.',
				action: {
					instructions: 'Please click the button below to verify your account',
					button: {
						color: '#33b5e5',
						text: 'Verify account',
						link: `${process.env.BASE_URL}/api/auth/activate?token=${token}`,
					},
				},
			},
		};
		const mailGenerator = new MailGen({
			theme: 'salted',
			product: {
				name: 'Visit Africa App',
				link: `${process.env.BASE_URL}/api/auth/activate?token=${token}`,
			},
		});
		const emailTemplate = mailGenerator.generate(emailToSend);
		require('fs').writeFileSync('preview.html', emailTemplate, 'utf8');
		const msg = {
			to: email,
			from: 't0780586360@gmail.com',
			subject: 'Test verification email',
			text: 'email verify',
			html: emailTemplate,
		};
		sgMail.setApiKey(process.env.SENDGRID_API_KEY);
		sgMail.send(msg);
	}
}

export default MailService;
