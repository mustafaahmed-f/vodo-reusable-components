import React from "react";
const SalesIcon = ({ fill = "#EB3D34", width = 20, height = 21 }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13.243 21.8385C13.4695 21.9013 13.6964 21.9627 13.9232 22.0243C14.3035 22.1278 14.6835 22.2324 15.0633 22.3377C15.5004 22.459 15.938 22.5784 16.3759 22.697C16.8001 22.8119 17.2239 22.9279 17.6476 23.0445C17.8267 23.0938 18.0059 23.1427 18.1851 23.1912C18.4358 23.2593 18.6861 23.3288 18.9363 23.3987C19.0094 23.4183 19.0826 23.4379 19.158 23.4581C19.8759 23.6616 20.4893 23.9812 20.9179 24.6094C21.2595 25.2415 21.3685 25.8806 21.2154 26.5929C21.0354 27.1435 20.743 27.5803 20.2215 27.8522C19.4755 28.191 18.7666 27.9883 18.0119 27.7731C17.9174 27.747 17.823 27.7209 17.7286 27.695C17.4816 27.6269 17.235 27.5579 16.9884 27.4886C16.5932 27.3776 16.1978 27.2674 15.8021 27.1583C15.6647 27.1202 15.5276 27.0813 15.3905 27.0424C15.3065 27.0191 15.2226 26.9959 15.136 26.9719C15.026 26.9409 15.026 26.9409 14.9137 26.9093C14.6354 26.8526 14.3404 26.7946 14.0863 26.9421C13.9814 27.1272 13.9962 27.2713 14.0136 27.4805C14.0362 27.5481 14.0587 27.6158 14.082 27.6855C14.2426 27.748 14.2426 27.748 14.4408 27.7858C14.5154 27.8027 14.59 27.8197 14.6669 27.8372C14.7446 27.8548 14.8223 27.8724 14.9023 27.8906C15.0468 27.9285 15.1911 27.9673 15.3351 28.0069C15.4092 28.0272 15.4834 28.0475 15.5597 28.0684C15.6366 28.0896 15.7136 28.1107 15.7928 28.1325C15.96 28.1783 16.1271 28.224 16.2942 28.2698C16.5545 28.3412 16.8147 28.4126 17.075 28.484C17.3283 28.5535 17.5817 28.6229 17.8351 28.6922C17.913 28.7137 17.9909 28.7351 18.0711 28.7572C18.1437 28.777 18.2163 28.7969 18.2911 28.8174C18.3547 28.8348 18.4183 28.8523 18.4837 28.8702C19.2979 29.0792 20.013 29.0129 20.7598 28.6212C21.4464 28.2126 21.8709 27.6717 22.1118 26.9024C22.1533 26.7052 22.1446 26.5292 22.1404 26.328C22.1608 26.0727 22.174 25.9514 22.3559 25.7674C22.5563 25.6419 22.759 25.5389 22.973 25.4382C23.1306 25.3573 23.2882 25.2762 23.4456 25.195C23.526 25.1546 23.6064 25.1143 23.6892 25.0727C24.0485 24.8881 24.3946 24.6832 24.7418 24.4769C24.8778 24.3971 25.0139 24.3173 25.1501 24.2377C25.2182 24.1977 25.2863 24.1578 25.3565 24.1167C25.7924 23.8621 26.2299 23.6104 26.6674 23.3586C27.0156 23.1581 27.3637 22.9574 27.7109 22.7551C27.833 22.684 27.9552 22.613 28.0774 22.542C28.2309 22.4528 28.3842 22.3634 28.5374 22.2738C29.3227 21.8182 29.9081 21.5809 30.83 21.7383C31.0763 21.827 31.2923 21.9411 31.5136 22.0801C31.5757 22.1181 31.6377 22.1562 31.7016 22.1954C32.1553 22.6617 32.3987 23.2282 32.4279 23.8745C32.4101 24.561 32.1596 25.0344 31.6992 25.5313C31.3789 25.8278 31.012 26.0235 30.6292 26.2286C30.5445 26.2753 30.4598 26.3222 30.3752 26.3692C30.2017 26.4655 30.0279 26.5612 29.8539 26.6565C29.4665 26.8694 29.0846 27.0919 28.7023 27.3138C28.5555 27.3987 28.4086 27.4835 28.2618 27.5683C28.1893 27.6102 28.1168 27.652 28.0422 27.6952C27.6727 27.9086 27.3031 28.1218 26.9335 28.3349C26.7854 28.4204 26.6373 28.5058 26.4892 28.5913C25.1562 29.3603 25.1562 29.3603 23.8232 30.1294C23.7131 30.1929 23.7131 30.1929 23.6009 30.2577C23.4533 30.3428 23.3058 30.4279 23.1582 30.513C22.7793 30.7316 22.4005 30.9502 22.0218 31.1692C21.6506 31.3838 21.2791 31.598 20.9074 31.8118C20.7849 31.8823 20.6625 31.953 20.5401 32.0239C18.9184 32.963 17.6233 33.0531 15.8219 32.6224C15.7106 32.5965 15.5991 32.5707 15.4877 32.545C15.1975 32.4779 14.9074 32.4098 14.6175 32.3414C14.1528 32.2319 13.6878 32.1232 13.2227 32.0156C13.062 31.9782 12.9015 31.9401 12.7411 31.9019C11.5586 31.6245 10.558 31.5724 9.41593 32.0523C9.26072 32.1157 9.11737 32.1591 8.95504 32.1973C8.58486 30.9341 8.24855 29.6621 7.91083 28.3901C7.82104 28.052 7.7311 27.7139 7.64113 27.3758C7.56829 27.1021 7.49556 26.8284 7.42308 26.5547C7.29342 26.0654 7.16232 25.5767 7.02572 25.0893C6.99137 24.9657 6.99137 24.9657 6.95633 24.8396C6.91429 24.6888 6.87165 24.5382 6.82828 24.3878C6.81004 24.3221 6.79179 24.2564 6.77299 24.1887C6.75697 24.1325 6.74094 24.0763 6.72443 24.0183C6.69474 23.8291 6.71155 23.6984 6.76753 23.5156C6.93016 23.3615 6.93016 23.3615 7.14778 23.2037C7.22897 23.1442 7.31015 23.0846 7.39131 23.0251C7.4344 22.9939 7.47749 22.9628 7.52189 22.9307C7.65979 22.8294 7.79486 22.7251 7.92964 22.6197C9.70931 21.2353 11.1415 21.2532 13.243 21.8385Z"
        fill={fill}
      />
      <path
        d="M15.5305 4.09325C15.6408 4.18645 15.7505 4.28045 15.8595 4.37524C15.9449 4.44582 15.9449 4.44582 16.032 4.51783C17.216 5.52697 18.0448 7.066 18.2521 8.61352C18.2595 8.66771 18.267 8.7219 18.2747 8.77774C18.4961 10.6462 18.0087 12.555 16.8432 14.0409C16.2273 14.8004 15.5523 15.377 14.6974 15.8596C14.6404 15.892 14.5835 15.9243 14.5249 15.9576C13.0135 16.7635 11.0952 16.9511 9.44598 16.4973C7.60748 15.9349 6.03377 14.7627 5.11076 13.0558C4.23437 11.3395 4.04534 9.36831 4.63262 7.52744C5.29052 5.59891 6.63424 4.21372 8.43127 3.30258C10.6796 2.25703 13.5708 2.55302 15.5305 4.09325ZM7.92979 5.9475C7.88018 5.98945 7.83056 6.03139 7.77945 6.07461C6.9021 6.88128 6.31807 8.11915 6.2662 9.30832C6.24186 10.7723 6.58757 12.0162 7.58799 13.1252C7.62923 13.1728 7.67047 13.2204 7.71296 13.2694C8.57735 14.2065 9.84904 14.6781 11.0959 14.7854C12.5377 14.826 13.8399 14.2665 14.8792 13.2863C15.8463 12.3128 16.3446 11.0868 16.3679 9.71581C16.3561 8.31594 15.7825 7.06531 14.8181 6.06206C13.855 5.13518 12.6196 4.67845 11.2922 4.62731C10.0186 4.66435 8.89232 5.12206 7.92979 5.9475Z"
        fill={fill}
      />
      <path
        d="M29.5989 5.55434C29.6756 5.55306 29.6756 5.55306 29.7538 5.55176C29.808 5.55302 29.8622 5.55428 29.918 5.55557C30.0028 5.55547 30.0028 5.55547 30.0893 5.55537C30.2084 5.55569 30.3275 5.55701 30.4466 5.55928C30.6288 5.56251 30.8107 5.56209 30.9929 5.56118C31.1089 5.56194 31.2248 5.56292 31.3407 5.56412C31.3951 5.56399 31.4494 5.56387 31.5054 5.56374C31.7519 5.57005 31.8947 5.58285 32.0925 5.73598C32.2882 6.00301 32.2756 6.22264 32.2755 6.54338C32.2758 6.59853 32.276 6.65368 32.2763 6.7105C32.277 6.89633 32.2773 7.08215 32.2776 7.26798C32.278 7.40079 32.2784 7.53361 32.2789 7.66642C32.2801 8.028 32.2808 8.38957 32.2814 8.75115C32.2817 8.97689 32.2822 9.20264 32.2826 9.42838C32.2839 10.1342 32.2849 10.8401 32.2854 11.546C32.2861 12.3616 32.2879 13.1772 32.2907 13.9929C32.2927 14.6228 32.2937 15.2527 32.294 15.8826C32.2941 16.259 32.2947 16.6355 32.2965 17.0119C32.298 17.366 32.2983 17.7201 32.2976 18.0742C32.2976 18.2043 32.298 18.3343 32.299 18.4644C32.3002 18.6418 32.2997 18.8191 32.2988 18.9965C32.2996 19.0481 32.3003 19.0997 32.3011 19.1528C32.298 19.3998 32.2717 19.5405 32.1395 19.7518C31.8806 19.9986 31.6083 19.9726 31.2705 19.9746C31.22 19.975 31.1695 19.9754 31.1175 19.9758C31.0108 19.9764 30.904 19.9769 30.7972 19.9771C30.6344 19.9778 30.4717 19.9799 30.3089 19.9821C30.2051 19.9825 30.1012 19.9829 29.9973 19.9831C29.9489 19.984 29.9005 19.9848 29.8506 19.9857C29.5497 19.9844 29.3565 19.9463 29.1209 19.7556C28.9465 19.5036 28.9645 19.2357 28.9655 18.9408C28.9651 18.8859 28.9648 18.8309 28.9644 18.7743C28.9634 18.59 28.9633 18.4058 28.9633 18.2214C28.9627 18.0894 28.9622 17.9573 28.9615 17.8253C28.96 17.4664 28.9594 17.1075 28.9591 16.7486C28.9588 16.5245 28.9584 16.3003 28.9579 16.0761C28.9563 15.2942 28.9554 14.5124 28.9551 13.7305C28.9549 13.0014 28.9528 12.2723 28.95 11.5432C28.9476 10.9174 28.9465 10.2917 28.9465 9.66588C28.9464 9.29205 28.9458 8.91823 28.9439 8.5444C28.9421 8.19281 28.942 7.84126 28.943 7.48967C28.9432 7.36065 28.9427 7.23163 28.9416 7.10261C28.9402 6.92641 28.9409 6.75033 28.9422 6.57413C28.9413 6.52311 28.9404 6.4721 28.9395 6.41953C28.9459 6.01898 29.13 5.55343 29.5989 5.55434Z"
        fill={fill}
      />
      <path
        d="M24.2991 8.52178C24.3558 8.52132 24.4126 8.52087 24.471 8.5204C24.5909 8.5197 24.7108 8.51938 24.8308 8.51941C25.0141 8.51911 25.1974 8.51662 25.3807 8.51403C25.4973 8.51363 25.6138 8.51336 25.7304 8.51323C25.8125 8.51176 25.8125 8.51176 25.8964 8.51025C26.1448 8.51229 26.2874 8.52106 26.4873 8.67488C26.6662 8.92079 26.6688 9.06811 26.67 9.37129C26.6705 9.46014 26.671 9.54899 26.6715 9.64053C26.6717 9.73957 26.6718 9.83861 26.672 9.93765C26.6725 10.0415 26.6729 10.1454 26.6734 10.2492C26.6746 10.5318 26.6753 10.8145 26.6759 11.0971C26.6762 11.2736 26.6766 11.4501 26.6771 11.6266C26.6784 12.1787 26.6793 12.7307 26.6799 13.2828C26.6806 13.9204 26.6824 14.558 26.6851 15.1956C26.6872 15.6882 26.6882 16.1808 26.6884 16.6734C26.6886 16.9677 26.6892 17.262 26.6909 17.5564C26.6925 17.8333 26.6928 18.1101 26.6921 18.387C26.6921 18.4886 26.6925 18.5903 26.6934 18.6918C26.6946 18.8306 26.694 18.9694 26.6933 19.1082C26.6934 19.1858 26.6936 19.2635 26.6938 19.3434C26.6522 19.5981 26.5674 19.7114 26.3865 19.8924C26.1426 19.9737 25.9189 19.9731 25.665 19.9746C25.6145 19.975 25.564 19.9754 25.512 19.9758C25.4052 19.9765 25.2985 19.9769 25.1917 19.9772C25.0289 19.9778 24.8662 19.98 24.7034 19.9821C24.5995 19.9826 24.4957 19.9829 24.3918 19.9832C24.3434 19.984 24.2949 19.9849 24.245 19.9857C23.9436 19.9844 23.7542 19.942 23.5154 19.7557C23.3539 19.5134 23.3615 19.4126 23.3613 19.1255C23.3607 18.992 23.3607 18.992 23.3601 18.8557C23.3604 18.7568 23.3607 18.6579 23.361 18.559C23.3608 18.455 23.3606 18.3511 23.3603 18.2471C23.3596 17.9645 23.3599 17.6818 23.3603 17.3992C23.3607 17.1037 23.3603 16.8081 23.3601 16.5125C23.3599 16.0161 23.3602 15.5196 23.3609 15.0232C23.3616 14.4491 23.3614 13.875 23.3606 13.3008C23.36 12.8082 23.3599 12.3155 23.3603 11.8229C23.3605 11.5285 23.3605 11.2342 23.36 10.9398C23.3596 10.663 23.3599 10.3863 23.3607 10.1095C23.3609 10.0078 23.3608 9.90621 23.3605 9.80458C23.3602 9.66594 23.3607 9.52729 23.3613 9.38865C23.3614 9.31103 23.3614 9.23342 23.3615 9.15345C23.3786 8.95522 23.4045 8.84499 23.5154 8.68146C23.7775 8.5067 23.995 8.52262 24.2991 8.52178Z"
        fill={fill}
        fill-opacity="0.85"
      />
      <path
        d="M5.2637 22.9002C5.59475 23.1273 5.64452 23.4762 5.73823 23.8442C5.76548 23.9465 5.76548 23.9465 5.79328 24.0509C5.85343 24.2776 5.91224 24.5046 5.97106 24.7317C6.01323 24.8917 6.05549 25.0516 6.09782 25.2116C6.20973 25.6352 6.32051 26.0591 6.43106 26.4831C6.54079 26.9033 6.65148 27.3232 6.76213 27.7431C6.89181 28.2354 7.02136 28.7276 7.1501 29.2201C7.34685 29.9723 7.54536 30.7238 7.75104 31.4736C7.76898 31.5392 7.78691 31.6048 7.80539 31.6725C7.88816 31.9754 7.9715 32.2781 8.05612 32.5806C8.08509 32.6862 8.11402 32.7919 8.14292 32.8975C8.15612 32.9437 8.16933 32.9898 8.18293 33.0374C8.2704 33.3612 8.28855 33.642 8.27151 33.9744C8.13051 34.2147 7.88472 34.2483 7.62717 34.3191C7.54024 34.3431 7.45331 34.3671 7.36375 34.3919C7.31846 34.404 7.27317 34.4161 7.22651 34.4286C7.08899 34.4655 6.95186 34.5036 6.81474 34.542C6.72668 34.566 6.63861 34.59 6.55051 34.6139C6.47091 34.6355 6.39131 34.6571 6.3093 34.6794C6.08315 34.7265 5.90334 34.755 5.67386 34.7263C5.35411 34.4958 5.29913 34.1794 5.20479 33.8167C5.18749 33.7532 5.1702 33.6898 5.15239 33.6244C5.09751 33.4223 5.04388 33.2198 4.99026 33.0173C4.95586 32.8903 4.92137 32.7632 4.88678 32.6362C4.77848 32.2374 4.67203 31.8382 4.56569 31.4389C4.52621 31.2911 4.48673 31.1433 4.44723 30.9954C4.34417 30.6096 4.24126 30.2237 4.13838 29.8377C4.01491 29.3747 3.89127 28.9118 3.76761 28.4488C3.66819 28.0765 3.56892 27.7042 3.46999 27.3318C3.30346 26.7053 3.13611 26.0792 2.96211 25.4548C2.92294 25.313 2.88384 25.1712 2.84476 25.0293C2.81008 24.9046 2.7744 24.7802 2.73869 24.6557C2.546 23.9558 2.546 23.9558 2.66604 23.5838C2.9444 23.288 3.39413 23.2311 3.77261 23.1266C3.84773 23.1047 3.92286 23.0828 4.00025 23.0602C4.43253 22.9394 4.81485 22.8482 5.2637 22.9002Z"
        fill={fill}
        fillOpacity="0.85"
      />
      <path
        d="M19.9095 11.4543C19.9813 11.4511 20.0531 11.448 20.1271 11.4448C20.2314 11.4433 20.2314 11.4433 20.3378 11.4417C20.4014 11.44 20.4651 11.4383 20.5306 11.4365C20.7459 11.4929 20.8451 11.5864 20.982 11.7594C21.1284 12.0318 21.1005 12.3299 21.0965 12.632C21.0969 12.7055 21.0973 12.7791 21.0977 12.8548C21.0985 13.0973 21.0968 13.3397 21.0951 13.5822C21.095 13.7509 21.095 13.9197 21.0951 14.0884C21.095 14.4417 21.0937 14.795 21.0915 15.1484C21.0888 15.6014 21.0885 16.0544 21.089 16.5074C21.0893 16.8557 21.0884 17.2039 21.0873 17.5522C21.0868 17.7193 21.0866 17.8863 21.0866 18.0534C21.0865 18.2867 21.085 18.52 21.0832 18.7534C21.0834 18.8225 21.0836 18.8915 21.0838 18.9627C21.0797 19.3038 21.0762 19.5493 20.8494 19.824C20.6118 20.0039 20.339 19.9817 20.0529 19.9813C19.9773 19.9817 19.9773 19.9817 19.9002 19.9822C19.7938 19.9826 19.6875 19.9826 19.5811 19.9823C19.4189 19.9821 19.2568 19.9837 19.0946 19.9854C18.9911 19.9856 18.8875 19.9856 18.7839 19.9856C18.7357 19.9862 18.6875 19.9868 18.6378 19.9875C18.3375 19.9847 18.148 19.941 17.91 19.7557C17.7399 19.5006 17.7544 19.3651 17.7512 19.0601C17.7505 19.0104 17.7499 18.9607 17.7492 18.9095C17.7472 18.7449 17.7462 18.5803 17.7455 18.4157C17.7447 18.301 17.7439 18.1863 17.7431 18.0716C17.7417 17.8308 17.7409 17.59 17.7404 17.3492C17.7396 17.0419 17.7364 16.7346 17.7325 16.4273C17.7299 16.1902 17.7292 15.953 17.729 15.7158C17.7286 15.6026 17.7275 15.4894 17.7257 15.3762C17.716 14.7231 17.7374 14.2542 18.1834 13.74C18.2845 13.5717 18.3735 13.3987 18.4611 13.2231C18.4841 13.1772 18.5071 13.1314 18.5308 13.0842C18.7383 12.6565 18.8801 12.2164 19.0099 11.76C19.1371 11.3356 19.5194 11.4611 19.9095 11.4543Z"
        fill={fill}
        fillOpacity="0.65"
      />
      <path
        d="M26.8233 0.319204C26.9344 0.340064 27.0454 0.361475 27.1563 0.383358C27.2451 0.400593 27.2451 0.400593 27.3357 0.418176C27.4602 0.442531 27.5846 0.467134 27.709 0.491972C27.8989 0.52963 28.089 0.565734 28.2792 0.601788C28.4005 0.625726 28.5218 0.649755 28.6431 0.673885C28.7279 0.689712 28.7279 0.689712 28.8145 0.705858C29.1359 0.771915 29.3764 0.836616 29.5996 1.09365C29.7298 1.50916 29.6137 1.82837 29.4749 2.22239C29.4542 2.28327 29.4335 2.34415 29.4122 2.40688C29.3684 2.535 29.3241 2.66294 29.2793 2.79071C29.2109 2.986 29.1446 3.1819 29.0785 3.37795C29.0356 3.50265 28.9926 3.62731 28.9494 3.75193C28.9297 3.81032 28.9099 3.86871 28.8896 3.92888C28.7841 4.22617 28.6973 4.45156 28.4375 4.64834C28.1918 4.72675 28.0774 4.73833 27.8394 4.63552C27.6742 4.5025 27.6053 4.44163 27.5488 4.23819C27.5653 3.8419 27.7021 3.48731 27.8332 3.11533C27.8977 2.94855 27.8977 2.94855 27.8906 2.80264C27.8461 2.82833 27.8016 2.85402 27.7557 2.88049C23.8916 5.10977 23.8916 5.10977 23.6694 5.23798C23.5215 5.3233 23.3736 5.40864 23.2257 5.49399C22.8522 5.70956 22.4785 5.92494 22.1046 6.13997C21.954 6.22666 21.8034 6.31335 21.6528 6.40005C21.58 6.44196 21.5071 6.48386 21.432 6.52704C21.0671 6.73733 20.7037 6.94969 20.3425 7.16616C20.2731 7.20765 20.2038 7.24914 20.1323 7.29189C20.0012 7.37055 19.8703 7.4496 19.7396 7.52908C19.6816 7.56388 19.6236 7.59867 19.5639 7.63453C19.5132 7.66523 19.4626 7.69593 19.4105 7.72757C19.2773 7.79287 19.2773 7.79287 19.0723 7.79287C18.9595 7.43194 18.8467 7.071 18.7305 6.69912C19.3235 6.33044 19.9214 5.97514 20.5292 5.63101C20.6984 5.53481 20.8676 5.43847 21.0368 5.34208C21.0789 5.3181 21.121 5.29411 21.1644 5.2694C21.5624 5.0424 21.9582 4.81161 22.3535 4.57998C22.9839 4.21084 23.6173 3.84718 24.252 3.48559C24.8999 3.11637 25.5453 2.74284 26.1884 2.36538C26.5708 2.1413 26.9553 1.92209 27.3438 1.70889C27.3062 1.7024 27.2686 1.6959 27.2299 1.68921C27.0582 1.65871 26.887 1.62614 26.7157 1.59353C26.6566 1.58335 26.5975 1.57318 26.5367 1.56269C26.1635 1.48977 25.9409 1.41148 25.7031 1.09365C25.6604 0.854397 25.6604 0.854397 25.7031 0.615139C26.0082 0.180695 26.3428 0.238262 26.8233 0.319204Z"
        fill={fill}
        fillOpacity="0.6"
      />
      <path
        d="M11.6211 5.94707C11.7828 6.0747 11.8713 6.17406 11.9629 6.35722C11.9656 6.49392 11.9659 6.63069 11.9629 6.76738C12.0108 6.77302 12.0588 6.77866 12.1082 6.78447C12.5453 6.89851 12.886 7.21118 13.125 7.58769C13.1775 7.8499 13.1457 7.95647 13.0268 8.19438C12.8047 8.37851 12.6679 8.38846 12.3856 8.37409C12.1528 8.32036 12.0432 8.17707 11.8946 7.99785C11.5975 7.89884 11.3163 7.89434 11.0059 7.92949C10.7571 8.06148 10.6861 8.1382 10.5957 8.40373C10.5957 8.65762 10.6389 8.76057 10.8008 8.95488C11.0517 9.07922 11.2621 9.10777 11.5399 9.11723C12.1211 9.15996 12.4922 9.3601 12.8876 9.78614C13.2035 10.1807 13.2735 10.6493 13.2617 11.1424C13.1508 11.7283 12.8569 12.1514 12.3757 12.4965C12.1957 12.6017 12.0334 12.6359 11.8262 12.6463C11.8368 12.7541 11.8368 12.7541 11.8476 12.8642C11.8262 13.1248 11.8262 13.1248 11.6852 13.3256C11.4844 13.4666 11.4844 13.4666 11.2451 13.5093C10.9404 13.4549 10.8413 13.3772 10.6641 13.1248C10.6427 12.8642 10.6427 12.8642 10.6641 12.6463C10.6077 12.6435 10.5513 12.6406 10.4932 12.6377C10.103 12.5402 9.81975 12.3086 9.57033 11.9969C9.48362 11.7801 9.4634 11.6473 9.50197 11.4158C9.67488 11.1748 9.77843 11.0876 10.0702 11.027C10.3307 11.0756 10.3872 11.1143 10.5786 11.2791C10.8627 11.5128 11.0885 11.537 11.4505 11.5154C11.6891 11.4717 11.8103 11.399 11.9629 11.2107C12.0629 10.9732 12.039 10.888 11.9415 10.6468C11.8457 10.4535 11.8457 10.4535 11.6895 10.3904C11.5301 10.3721 11.3706 10.3552 11.211 10.3392C10.6205 10.267 10.1296 10.1281 9.7455 9.65129C9.40564 9.13717 9.27918 8.65731 9.39489 8.04645C9.52383 7.58036 9.78724 7.21122 10.1944 6.94602C10.412 6.83178 10.552 6.76738 10.8008 6.76738C10.7938 6.69548 10.7867 6.62357 10.7794 6.54949C10.8008 6.28887 10.8008 6.28887 10.9418 6.08806C11.1932 5.91152 11.3198 5.89776 11.6211 5.94707Z"
        fill={fill}
      />
      <path
        d="M15.4492 16.6113C15.4543 17.014 15.458 17.4166 15.4605 17.8192C15.4615 17.9561 15.4629 18.0931 15.4647 18.23C15.4672 18.427 15.4683 18.624 15.4692 18.821C15.4703 18.882 15.4713 18.9431 15.4724 19.006C15.4725 19.3325 15.4663 19.565 15.2441 19.8242C15.0065 20.0041 14.7338 19.9819 14.4476 19.9815C14.372 19.9819 14.372 19.9819 14.2949 19.9824C14.1885 19.9828 14.0822 19.9828 13.9758 19.9825C13.8136 19.9823 13.6515 19.9839 13.4893 19.9856C13.3858 19.9858 13.2822 19.9858 13.1787 19.9858C13.1063 19.9867 13.1063 19.9867 13.0325 19.9877C12.7322 19.9849 12.5427 19.9412 12.3047 19.7559C12.144 19.5149 12.1511 19.4144 12.1522 19.1294C12.1524 19.006 12.1524 19.006 12.1526 18.88C12.1534 18.794 12.1543 18.708 12.1551 18.6194C12.1552 18.5329 12.1552 18.4463 12.1553 18.3572C12.1584 17.7147 12.1584 17.7147 12.2363 17.6367C12.3504 17.6152 12.4646 17.5942 12.5791 17.5752C13.4897 17.424 14.3103 17.1362 15.1258 16.704C15.3125 16.6113 15.3125 16.6113 15.4492 16.6113Z"
        fill={fill}
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default SalesIcon;
