<?php
// You can add PHP logic here if needed later
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Warehouse Management System (WMS)</title>

    <!-- Tailwind CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body class="bg-gray-100">
    <div class="min-h-screen flex flex-col items-center p-8">

        <!-- Header -->
        <h1 class="text-4xl font-bold mb-4 text-gray-900">
            Warehouse Management System (WMS)
        </h1>

        <p class="text-gray-600 text-center max-w-2xl mb-12">
            This page serves as the main page for my Senior Project. 
            On this page there is accessible documents, user manuals, and other important information regarding the construction of our system.
            You can even visit our site by clicking the button below feel free to create an account. 
        </p>

        <!-- Navigation Buttons -->
        <div class="flex space-x-6">
            <button onclick="history.back()" 
                class="bg-gray-500 text-white px-5 py-2 rounded-lg hover:bg-gray-600 transition">
                ⬅️ Back
            </button>

            <a href="https://wmsproject.bcolditz.tech/dashboard"
                class="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
                📊 Go Web Page
            </a>
        </div>

        <!-- Information Section -->
        <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mb-10">
            <h2 class="text-2xl font-semibold mb-4">📦 System Overview</h2>
            <p class="text-gray-700">
                This project is a warehouse management system which can create
                    efficient, organized, and responsive warehouse operations.​

                This application has the ability to handle automated inventory updates,
                    stock management, and reporting. ​

                Along with being able to handle its products with the inclusion of QR
                and Barcode scanning for easy product management and auditing.​
            </p>
        </div>

        <!-- Information Section -->
        <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mb-10">
            <h2 class="text-2xl font-semibold mb-4">🛠️ Tools Used</h2>
            <p class="text-gray-700">
                <ul style="text-align:left; max-width:700px; margin:0 auto; margin-top:20px;">
                    <li>PHP​</li>
                    <li>Docker Container​​</li>
                    <li>Apache​</li>
                    <li>GitHub Verison Control​</li>
                    <li>phpMyAdmin​</li>
                    <li>MySql​</li>
                    <li>BootStrap​</li>
                    <li>JavaScript​</li>
                    <li>CSS​</li>                                        
                </ul>
            </p>
        </div>

        <!-- Information Section -->
        <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mb-10">
            <h2 class="text-2xl font-semibold mb-4">⚙️ Notable Features</h2>
            <p class="text-gray-700">
                <ul style="text-align:left; max-width:700px; margin:0 auto; margin-top:20px;">
                    <li>Active Directory Authentication​</li>
                    <li>Role-based Access Control​​</li>
                    <li>Vendor & Customer RMAs (Returns)​</li>
                    <li>Mobile QR Code Product Scanning​</li>
                    <li>Purchase Order invoice form emails to partner automatically​</li>
                    <li>Custom printable forms for purchase orders, customer orders, and RMAs​</li>
                    <li>Email Verification upon user registration​</li>
                    <li>Custom location & product labels​</li>
                    <li>Mobile-ready application​</li>
                    <li>Security-first approach to development​</li>                    
                </ul>
            </p>
        </div>

        <!-- Documents Section with iframes -->
        <div class="bg-white shadow-lg rounded-xl p-6 w-full max-w-3xl mb-10">
            <h2 class="text-2xl font-semibold mb-4">📄 Documents</h2>

            <ul class="space-y-6">
                <!-- User Manual PDF -->
                <li>
                    <p class="font-semibold mb-2">📁 Warehouse User Guide (PDF)</p>
                    <iframe src="/docs/User_Manual.pdf" width="100%" height="600px" class="border rounded"></iframe>
                    <a href="/docs/User_Manual.pdf" download class="text-green-600 hover:underline mt-2 inline-block">Download PDF</a>
                </li>

                <!-- Requirements PDF -->
                <li>
                    <p class="font-semibold mb-2">📁 Requirements Document</p>
                    <iframe src="/docs/requirements.pdf" width="100%" height="600px" class="border rounded"></iframe>
                    <a href="/docs/requirements.pdf" download class="text-green-600 hover:underline mt-2 inline-block">Download PDF</a>
                </li>

                <!-- Specifications PDF -->
                <li>
                    <p class="font-semibold mb-2">📄 Specifications Document</p>
                    <iframe src="/docs/Specifications.pdf" width="100%" height="600px" class="border rounded"></iframe>
                    <a href="/docs/Specifications.pdf" download class="text-green-600 hover:underline mt-2 inline-block">Download PDF</a>
                </li>
                <!-- Design PDF -->
                <li>
                    <p class="font-semibold mb-2">📄 Design Document</p>
                    <iframe src="/docs/Design.pdf" width="100%" height="600px" class="border rounded"></iframe>
                    <a href="/docs/Design.pdf" download class="text-green-600 hover:underline mt-2 inline-block">Download PDF</a>
                </li>
            </ul>
        </div>

        
    </div>
</body>
</html>
