import type { NextPage } from 'next'
import Head from 'next/head'
import NavigationBar from '../components/organisms/navigation-bar'
import { Box, Flex, Text } from '@chakra-ui/react'

const PrivacyPolicy: NextPage = () => {
	return (
		<>
			<Head>
				<title>Privacy Policy - School of Tyrannus</title>
			</Head>
			<Box pos='relative'>
				<NavigationBar />
				<Box maxWidth='1100px' margin='40px auto' padding='0 24px'>
					<Text fontSize='13px' fontWeight='600' color='#ba5a52' marginBottom='15px'>
						LAST UPDATED: 24TH MAY, 2023
					</Text>
					<Text fontSize='32px' fontWeight='600'>
						Privacy Policy
					</Text>

					<Flex direction='column' gap='20px' margin='20px 0'>
						<Text lineHeight='160%' textAlign='justify'>
							Thank you for using School of Tyrannus (&quot;we&quot; or &quot;us&quot;). This Privacy Policy explains how we
							collect, use, disclose, and protect your personal information when you use our e-learning platform. We are
							committed to safeguarding your privacy and ensuring the security of your personal information. By using our
							platform, you consent to the practices described in this Privacy Policy.
						</Text>

						<Text fontWeight='600'>Information We Collect</Text>

						<Text>1.1 Personal Information</Text>

						<Text lineHeight='160%' textAlign='justify'>
							When you sign up for an account on School of Tyrannus, we collect certain personal information, including your
							email address and phone number. This information is necessary to create and manage your account, provide access
							to courses, and send important notifications and updates related to your account and the platform.
						</Text>

						<Text>1.2 Usage Information</Text>

						<Text lineHeight='160%' textAlign='justify'>
							We may collect certain information about your usage of the School of Tyrannus platform, such as the courses you
							access, the duration of your sessions, and your interactions with the platform&apos;s features. This information
							helps us analyze user behaviour, improve our platform, and personalize your learning experience.
						</Text>

						<Text fontWeight='600'>Use of Personal Information</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We use the personal information we collect for the following purposes:
						</Text>

						<Text>2.1 Account Management</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We use your email address and phone number to create and manage your School of Tyrannus account. This includes
							account verification, password resets, and communication-related to your account and the platform.
						</Text>

						<Text>2.2 Course Access and Progress Tracking</Text>
						<Text lineHeight='160%' textAlign='justify'>
							Your personal information is used to provide you with access to courses and track your progress within those
							courses. This allows us to personalize your learning experience and provide relevant course recommendations.
						</Text>

						<Text>2.3 Communication</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We may use your email address and phone number to send important notifications, updates, and announcements
							related to your account, courses, or the platform. These communications are essential for providing a seamless
							learning experience and keeping you informed about relevant information.
						</Text>

						<Text>2.4 Platform Improvement and Research</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We analyze user data, including usage patterns and feedback, to improve the School of Tyrannus platform, enhance
							user experience, and develop new features and offerings. This analysis is performed on an aggregated and
							anonymized basis, ensuring your personal information remains confidential.
						</Text>

						<Text fontWeight='600'>Disclosure of Personal Information</Text>
						<Text>We may disclose your personal information in the following circumstances:</Text>

						<Text>3.1 Service Providers</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We may engage trusted third-party service providers to assist in operating and managing the School of Tyrannus
							platform. These service providers are authorized to access and process your personal information solely for the
							purpose of providing their services to us.
						</Text>

						<Text>3.2 Legal Requirements</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We may disclose your personal information if required to do so by law or in response to valid legal requests,
							such as subpoenas, court orders, or government regulations. We may also disclose your information to protect our
							rights, property, or safety, or the rights, property, or safety of others.
						</Text>

						<Text fontWeight='600'>Data Security</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We implement appropriate security measures to protect your personal information and prevent unauthorized access,
							disclosure, or alteration. However, no data transmission or storage system can guarantee complete security.
							While we strive to protect your personal information, we cannot guarantee its absolute security.
						</Text>

						<Text fontWeight='600'>Data Retention</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We retain your personal information for as long as necessary to fulfill the purposes outlined in this Privacy
							Policy, unless a longer retention period is required or permitted by law. When your personal information is no
							longer needed, we will securely delete or anonymize it.
						</Text>

						<Text fontWeight='600'>Children&apos;s Privacy</Text>
						<Text lineHeight='160%' textAlign='justify'>
							School of Tyrannus is not directed to individuals under the age of 13. We do not knowingly collect personal
							information from children. If you believe we have unintentionally collected personal information from a child
							under 13, please contact us, and we will promptly delete the information.
						</Text>

						<Text fontWeight='600'>Your Rights</Text>
						<Text lineHeight='160%' textAlign='justify'>
							You have certain rights regarding your personal information, including the right to access, correct, or delete
							your information. You may also have the right to object to or restrict certain processing activities. To
							exercise your rights or for any privacy-related inquiries, please contact us using the information provided at
							the end of this Privacy Policy.
						</Text>

						<Text fontWeight='600'>Changes to this Privacy Policy</Text>
						<Text lineHeight='160%' textAlign='justify'>
							We may update this Privacy Policy from time to time. The updated version will be effective as of the date stated
							at the beginning of the Privacy Policy. We encourage you to review this Privacy Policy periodically for any
							changes. Your continued use of the School of Tyrannus platform after the effective date of the updated Privacy
							Policy constitutes your acceptance of the revised terms.
						</Text>

						<Text fontWeight='600'>Contact Us</Text>
						<Text lineHeight='160%' textAlign='justify'>
							If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please
							contact us at{' '}
							<Text as='a' color='#ba5a52' href='mailto:support@tyrannus.com'>
								support@tyrannus.com
							</Text>
						</Text>
						<Text lineHeight='160%' textAlign='justify'>
							Thank you for using the School of Tyrannus and entrusting us with your personal information.
						</Text>
					</Flex>
				</Box>
			</Box>
		</>
	)
}

export default PrivacyPolicy
