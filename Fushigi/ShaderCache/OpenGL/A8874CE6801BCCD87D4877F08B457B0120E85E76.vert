#version 450 core
#extension GL_ARB_gpu_shader_int64 : enable
#extension GL_ARB_shader_ballot : enable
#extension GL_ARB_shader_group_vote : enable
#extension GL_EXT_shader_image_load_formatted : enable
#extension GL_EXT_texture_shadow_lod : enable
#extension GL_ARB_shader_draw_parameters : enable
#extension GL_ARB_shader_viewport_layer_array : enable
#extension GL_NV_viewport_array2 : enable
#pragma optionNV(fastmath off)

const int undef = 0;

layout (binding = 0, std140) uniform _support_buffer
{
    uint alpha_test;
    uint is_bgra[8];
    precise vec4 viewport_inverse;
    precise vec4 viewport_size;
    int frag_scale_count;
    precise float render_scale[73];
    ivec4 tfe_offset;
    int tfe_vertex_count;
} support_buffer;

layout (binding = 8, std140) uniform _vp_c7
{
    precise vec4 data[4096];
} vp_c7;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 4, std140) uniform _vp_c3
{
    precise vec4 data[4096];
} vp_c3;

layout (location = 0) in vec4 in_attr0;
layout (location = 1) in vec4 in_attr1;
layout (location = 2) in vec4 in_attr2;
layout (location = 8) in vec4 in_attr8;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;


void main()
{
    precise float temp_0;
    precise float temp_1;
    int temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    int temp_6;
    precise float temp_7;
    precise float temp_8;
    precise float temp_9;
    precise float temp_10;
    precise float temp_11;
    precise float temp_12;
    precise float temp_13;
    precise float temp_14;
    precise float temp_15;
    precise float temp_16;
    precise float temp_17;
    precise float temp_18;
    precise float temp_19;
    precise float temp_20;
    precise float temp_21;
    precise float temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    int temp_27;
    uint temp_28;
    uint temp_29;
    int temp_30;
    precise float temp_31;
    int temp_32;
    uint temp_33;
    int temp_34;
    precise float temp_35;
    int temp_36;
    uint temp_37;
    uint temp_38;
    int temp_39;
    precise float temp_40;
    int temp_41;
    uint temp_42;
    int temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    precise float temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    int temp_56;
    uint temp_57;
    uint temp_58;
    int temp_59;
    precise float temp_60;
    int temp_61;
    uint temp_62;
    uint temp_63;
    int temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    precise float temp_68;
    precise float temp_69;
    precise float temp_70;
    precise float temp_71;
    precise float temp_72;
    precise float temp_73;
    precise float temp_74;
    precise float temp_75;
    precise float temp_76;
    precise float temp_77;
    precise float temp_78;
    precise float temp_79;
    precise float temp_80;
    precise float temp_81;
    precise float temp_82;
    precise float temp_83;
    precise float temp_84;
    precise float temp_85;
    precise float temp_86;
    precise float temp_87;
    precise float temp_88;
    precise float temp_89;
    precise float temp_90;
    precise float temp_91;
    precise float temp_92;
    precise float temp_93;
    precise float temp_94;
    precise float temp_95;
    precise float temp_96;
    precise float temp_97;
    precise float temp_98;
    precise float temp_99;
    precise float temp_100;
    precise float temp_101;
    precise float temp_102;
    precise float temp_103;
    precise float temp_104;
    precise float temp_105;
    precise float temp_106;
    precise float temp_107;
    precise float temp_108;
    precise float temp_109;
    precise float temp_110;
    precise float temp_111;
    precise float temp_112;
    precise float temp_113;
    precise float temp_114;
    precise float temp_115;
    precise float temp_116;
    precise float temp_117;
    precise float temp_118;
    precise float temp_119;
    precise float temp_120;
    precise float temp_121;
    precise float temp_122;
    precise float temp_123;
    precise float temp_124;
    precise float temp_125;
    precise float temp_126;
    precise float temp_127;
    precise float temp_128;
    precise float temp_129;
    precise float temp_130;
    precise float temp_131;
    precise float temp_132;
    precise float temp_133;
    precise float temp_134;
    precise float temp_135;
    precise float temp_136;
    precise float temp_137;
    precise float temp_138;
    precise float temp_139;
    precise float temp_140;
    precise float temp_141;
    precise float temp_142;
    precise float temp_143;
    precise float temp_144;
    precise float temp_145;
    precise float temp_146;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A70016 Mov
    // 0x000010: 0xEFD87F800807FF0D Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A17 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B70000 Mov
    // 0x000030: 0xEFD87F800907FF08 Ald
    temp_3 = in_attr1.x;
    // 0x000038: 0x4C98079400270012 Mov
    // 0x000048: 0xEFD87F800A07FF04 Ald
    temp_4 = in_attr2.x;
    // 0x000050: 0x4C98079400370003 Mov
    // 0x000058: 0xEFD87F801047FF11 Ald
    temp_5 = in_attr8.y;
    // 0x000068: 0x3848000000471717 Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800847FF02 Ald
    temp_7 = in_attr0.y;
    // 0x000078: 0x4C68101000070D14 Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800947FF0F Ald
    temp_9 = in_attr1.y;
    // 0x000090: 0x4C68101000470D0B Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F800A47FF07 Ald
    temp_11 = in_attr2.y;
    // 0x0000A8: 0x4C68101000870D0D Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0xEFD87F800987FF09 Ald
    temp_13 = in_attr1.z;
    // 0x0000B8: 0x4C68101000070805 Fmul
    temp_14 = temp_3 * vp_c4.data[0].x;
    // 0x0000C8: 0xEFD87F800A87FF06 Ald
    temp_15 = in_attr2.z;
    // 0x0000D0: 0x4C6810100007040C Fmul
    temp_16 = temp_4 * vp_c4.data[0].x;
    // 0x0000D8: 0xEFD87F801007FF10 Ald
    temp_17 = in_attr8.x;
    // 0x0000E8: 0x51A00B1400C71116 Ffma
    temp_18 = fma(temp_5, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000F0: 0xEFD87F800887FF0A Ald
    temp_19 = in_attr0.z;
    // 0x0000F8: 0x51A0001400D71115 Ffma
    temp_20 = fma(temp_5, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x000108: 0x51A0091400471112 Ffma
    temp_21 = fma(temp_5, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000110: 0x51A0019400571111 Ffma
    temp_22 = fma(temp_5, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000118: 0x49A00A1000170214 Ffma
    temp_23 = fma(temp_7, vp_c4.data[0].y, temp_8);
    // 0x000128: 0x49A005900057020B Ffma
    temp_24 = fma(temp_7, vp_c4.data[1].y, temp_10);
    // 0x000130: 0x49A006900097020D Ffma
    temp_25 = fma(temp_7, vp_c4.data[2].y, temp_12);
    // 0x000138: 0x4C6810100047080E Fmul
    temp_26 = temp_3 * vp_c4.data[1].x;
    // 0x000148: 0xEF95007068071702 Ldc
    temp_27 = temp_6 + 0x680;
    temp_28 = uint(temp_27) >> 2;
    temp_29 = temp_28 >> 2;
    temp_30 = int(temp_28) & 3;
    temp_31 = vp_c7.data[int(temp_29)][temp_30];
    temp_32 = int(temp_28) + 1;
    temp_33 = uint(temp_32) >> 2;
    temp_34 = temp_32 & 3;
    temp_35 = vp_c7.data[int(temp_33)][temp_34];
    // 0x000150: 0xEF95007048071700 Ldc
    temp_36 = temp_6 + 0x480;
    temp_37 = uint(temp_36) >> 2;
    temp_38 = temp_37 >> 2;
    temp_39 = int(temp_37) & 3;
    temp_40 = vp_c7.data[int(temp_38)][temp_39];
    temp_41 = int(temp_37) + 1;
    temp_42 = uint(temp_41) >> 2;
    temp_43 = temp_41 & 3;
    temp_44 = vp_c7.data[int(temp_42)][temp_43];
    // 0x000158: 0x4C68101000870808 Fmul
    temp_45 = temp_3 * vp_c4.data[2].x;
    // 0x000168: 0x4C68101000470418 Fmul
    temp_46 = temp_4 * vp_c4.data[1].x;
    // 0x000170: 0x49A0029000170F13 Ffma
    temp_47 = fma(temp_9, vp_c4.data[0].y, temp_14);
    // 0x000178: 0x49A006100017070C Ffma
    temp_48 = fma(temp_11, vp_c4.data[0].y, temp_16);
    // 0x000188: 0x4C68101000870404 Fmul
    temp_49 = temp_4 * vp_c4.data[2].x;
    // 0x000190: 0x49A0071000570F0E Ffma
    temp_50 = fma(temp_9, vp_c4.data[1].y, temp_26);
    // 0x000198: 0x49A0041000970F0F Ffma
    temp_51 = fma(temp_9, vp_c4.data[2].y, temp_45);
    // 0x0001A8: 0x49A00C1000570708 Ffma
    temp_52 = fma(temp_11, vp_c4.data[1].y, temp_46);
    // 0x0001B0: 0x49A0099000270913 Ffma
    temp_53 = fma(temp_13, vp_c4.data[0].z, temp_47);
    // 0x0001B8: 0x49A006100027060C Ffma
    temp_54 = fma(temp_15, vp_c4.data[0].z, temp_48);
    // 0x0001C8: 0x49A0021000970707 Ffma
    temp_55 = fma(temp_11, vp_c4.data[2].y, temp_49);
    // 0x0001D0: 0xEF94007068871704 Ldc
    temp_56 = temp_6 + 0x688;
    temp_57 = uint(temp_56) >> 2;
    temp_58 = temp_57 >> 2;
    temp_59 = int(temp_57) & 3;
    temp_60 = vp_c7.data[int(temp_58)][temp_59];
    // 0x0001D8: 0xEF94007048871705 Ldc
    temp_61 = temp_6 + 0x488;
    temp_62 = uint(temp_61) >> 2;
    temp_63 = temp_62 >> 2;
    temp_64 = int(temp_62) & 3;
    temp_65 = vp_c7.data[int(temp_63)][temp_64];
    // 0x0001E8: 0x49A00B1400871018 Ffma
    temp_66 = fma(temp_17, vp_c5.data[2].x, temp_18);
    // 0x0001F0: 0x49A00A1000270A14 Ffma
    temp_67 = fma(temp_19, vp_c4.data[0].z, temp_23);
    // 0x0001F8: 0x49A0059000670A16 Ffma
    temp_68 = fma(temp_19, vp_c4.data[1].z, temp_24);
    // 0x000208: 0x49A0069000A70A0D Ffma
    temp_69 = fma(temp_19, vp_c4.data[2].z, temp_25);
    // 0x000210: 0x49A007100067090E Ffma
    temp_70 = fma(temp_13, vp_c4.data[1].z, temp_50);
    // 0x000218: 0x49A0079000A7090F Ffma
    temp_71 = fma(temp_13, vp_c4.data[2].z, temp_51);
    // 0x000228: 0x49A0041000670608 Ffma
    temp_72 = fma(temp_15, vp_c4.data[1].z, temp_52);
    // 0x000230: 0x5C68100001371309 Fmul
    temp_73 = temp_53 * temp_53;
    // 0x000238: 0x5C68100000C70C0A Fmul
    temp_74 = temp_54 * temp_54;
    // 0x000248: 0x4C5810100037140B Fadd
    temp_75 = temp_67 + vp_c4.data[0].w;
    // 0x000250: 0x49A0039000A70607 Ffma
    temp_76 = fma(temp_15, vp_c4.data[2].z, temp_55);
    // 0x000258: 0x4C58101000771616 Fadd
    temp_77 = temp_68 + vp_c4.data[1].w;
    // 0x000268: 0x49A00A9400971015 Ffma
    temp_78 = fma(temp_17, vp_c5.data[2].y, temp_20);
    // 0x000270: 0x59A0048000E70E09 Ffma
    temp_79 = fma(temp_70, temp_70, temp_73);
    // 0x000278: 0x59A005000087080A Ffma
    temp_80 = fma(temp_72, temp_72, temp_74);
    // 0x000288: 0x59A0010000070B00 Ffma
    temp_81 = fma(temp_75, temp_40, temp_31);
    // 0x000290: 0x4C58101000B70D02 Fadd
    temp_82 = temp_69 + vp_c4.data[2].w;
    // 0x000298: 0x59A0018000171603 Ffma
    temp_83 = fma(temp_77, temp_44, temp_35);
    // 0x0002A8: 0x49A0091400071012 Ffma
    temp_84 = fma(temp_17, vp_c5.data[0].x, temp_21);
    // 0x0002B0: 0x59A0048000F70F09 Ffma
    temp_85 = fma(temp_71, temp_71, temp_79);
    // 0x0002B8: 0x59A005000077070A Ffma
    temp_86 = fma(temp_76, temp_76, temp_80);
    // 0x0002C8: 0x5080000000570909 Mufu
    temp_87 = inversesqrt(temp_85);
    // 0x0002D0: 0x4C68100C00870001 Fmul
    temp_88 = temp_81 * vp_c3.data[2].x;
    // 0x0002D8: 0x5080000000570A0A Mufu
    temp_89 = inversesqrt(temp_86);
    // 0x0002E8: 0x49A0089400171011 Ffma
    temp_90 = fma(temp_17, vp_c5.data[0].y, temp_22);
    // 0x0002F0: 0xEFD87F800AC7FF10 Ald
    temp_91 = in_attr2.w;
    // 0x0002F8: 0x59A0020000570202 Ffma
    temp_92 = fma(temp_82, temp_65, temp_60);
    // 0x000308: 0xEFF07F800D87FF18 Ast
    out_attr5.z = temp_66;
    // 0x000310: 0x49A0008C00970301 Ffma
    temp_93 = fma(temp_83, vp_c3.data[2].y, temp_88);
    // 0x000318: 0xEFF07F800DC7FF15 Ast
    out_attr5.w = temp_78;
    // 0x000328: 0x4C68100C00070004 Fmul
    temp_94 = temp_81 * vp_c3.data[0].x;
    // 0x000330: 0xEFF07F800D07FF12 Ast
    out_attr5.x = temp_84;
    // 0x000338: 0x4C58300C02F70006 Fadd
    temp_95 = 0.0 - vp_c3.data[11].w;
    temp_96 = temp_81 + temp_95;
    // 0x000348: 0xEFF07F800E07FF12 Ast
    out_attr6.x = temp_84;
    // 0x000350: 0x4C68100C00470000 Fmul
    temp_97 = temp_81 * vp_c3.data[1].x;
    // 0x000358: 0xEFF07F800B07FF06 Ast
    out_attr3.x = temp_96;
    // 0x000368: 0x5C68100000970F0F Fmul
    temp_98 = temp_71 * temp_87;
    // 0x000370: 0xEFF07F800D47FF11 Ast
    out_attr5.y = temp_90;
    // 0x000378: 0x5C68100000A70808 Fmul
    temp_99 = temp_72 * temp_89;
    // 0x000388: 0xEFF07F800887FF0F Ast
    out_attr0.z = temp_98;
    // 0x000390: 0x49A0008C00A70205 Ffma
    temp_100 = fma(temp_92, vp_c3.data[2].z, temp_93);
    // 0x000398: 0xEFF07F800E47FF11 Ast
    out_attr6.y = temp_90;
    // 0x0003A8: 0x4C58300C0377020D Fadd
    temp_101 = 0.0 - vp_c3.data[13].w;
    temp_102 = temp_92 + temp_101;
    // 0x0003B0: 0xEFF07F800947FF08 Ast
    out_attr1.y = temp_99;
    // 0x0003B8: 0x4C58101002070202 Fadd
    temp_103 = temp_92 + vp_c4.data[8].x;
    // 0x0003C8: 0xEFF07F800B87FF0D Ast
    out_attr3.z = temp_102;
    // 0x0003D0: 0x49A0020C00170304 Ffma
    temp_104 = fma(temp_83, vp_c3.data[0].y, temp_94);
    // 0x0003D8: 0x4C58300C0337030B Fadd
    temp_105 = 0.0 - vp_c3.data[12].w;
    temp_106 = temp_83 + temp_105;
    // 0x0003E8: 0x49A0000C00570300 Ffma
    temp_107 = fma(temp_83, vp_c3.data[1].y, temp_97);
    // 0x0003F0: 0xEFF07F800B47FF0B Ast
    out_attr3.y = temp_106;
    // 0x0003F8: 0x5C68100000971313 Fmul
    temp_108 = temp_53 * temp_87;
    // 0x000408: 0x5C68100000A70706 Fmul
    temp_109 = temp_76 * temp_89;
    // 0x000410: 0xEFF07F800807FF13 Ast
    out_attr0.x = temp_108;
    // 0x000418: 0x5C68100000970E09 Fmul
    temp_110 = temp_70 * temp_87;
    // 0x000428: 0xEFF07F800987FF06 Ast
    out_attr1.z = temp_109;
    // 0x000430: 0x5C68100000870F03 Fmul
    temp_111 = temp_98 * temp_99;
    // 0x000438: 0xEFF07F800847FF09 Ast
    out_attr0.y = temp_110;
    // 0x000448: 0x4C58100C00B70505 Fadd
    temp_112 = temp_100 + vp_c3.data[2].w;
    // 0x000450: 0x5C68100000A70C0A Fmul
    temp_113 = temp_54 * temp_89;
    // 0x000458: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_112;
    // 0x000468: 0x49A0020C00270204 Ffma
    temp_114 = fma(temp_103, vp_c3.data[0].z, temp_104);
    // 0x000470: 0xEFF07F800907FF0A Ast
    out_attr1.x = temp_113;
    // 0x000478: 0x59A2018000670907 Ffma
    temp_115 = 0.0 - temp_111;
    temp_116 = fma(temp_110, temp_109, temp_115);
    // 0x000488: 0x49A0000C00670200 Ffma
    temp_117 = fma(temp_103, vp_c3.data[1].z, temp_107);
    // 0x000490: 0x49A0008C00A70201 Ffma
    temp_118 = fma(temp_103, vp_c3.data[2].z, temp_93);
    // 0x000498: 0x5C68100000671305 Fmul
    temp_119 = temp_108 * temp_109;
    // 0x0004A8: 0x5C68100000A70906 Fmul
    temp_120 = temp_110 * temp_113;
    // 0x0004B0: 0x4C58100C00370404 Fadd
    temp_121 = temp_114 + vp_c3.data[0].w;
    // 0x0004B8: 0x5C68100001070709 Fmul
    temp_122 = temp_116 * temp_91;
    // 0x0004C8: 0x4C58100C00770000 Fadd
    temp_123 = temp_117 + vp_c3.data[1].w;
    // 0x0004D0: 0xEFF07F800A07FF09 Ast
    out_attr2.x = temp_122;
    // 0x0004D8: 0x59A2028000A70F0F Ffma
    temp_124 = 0.0 - temp_119;
    temp_125 = fma(temp_98, temp_113, temp_124);
    // 0x0004E8: 0x59A2030000871307 Ffma
    temp_126 = 0.0 - temp_120;
    temp_127 = fma(temp_108, temp_99, temp_126);
    // 0x0004F0: 0x4C68100C02870402 Fmul
    temp_128 = temp_121 * vp_c3.data[10].x;
    // 0x0004F8: 0x4C68100C02470403 Fmul
    temp_129 = temp_121 * vp_c3.data[9].x;
    // 0x000508: 0x4C68100C02070405 Fmul
    temp_130 = temp_121 * vp_c3.data[8].x;
    // 0x000510: 0x4C68100C01C70406 Fmul
    temp_131 = temp_121 * vp_c3.data[7].x;
    // 0x000518: 0x4C58100C00B70101 Fadd
    temp_132 = temp_118 + vp_c3.data[2].w;
    // 0x000528: 0x5C68100001070F0F Fmul
    temp_133 = temp_125 * temp_91;
    // 0x000530: 0x49A0010C02970002 Ffma
    temp_134 = fma(temp_123, vp_c3.data[10].y, temp_128);
    // 0x000538: 0xEFF07F800A47FF0F Ast
    out_attr2.y = temp_133;
    // 0x000548: 0x49A0018C02570003 Ffma
    temp_135 = fma(temp_123, vp_c3.data[9].y, temp_129);
    // 0x000550: 0x49A0028C02170004 Ffma
    temp_136 = fma(temp_123, vp_c3.data[8].y, temp_130);
    // 0x000558: 0x49A0030C01D70006 Ffma
    temp_137 = fma(temp_123, vp_c3.data[7].y, temp_131);
    // 0x000568: 0x5C68100001070707 Fmul
    temp_138 = temp_127 * temp_91;
    // 0x000570: 0x49A0010C02A70102 Ffma
    temp_139 = fma(temp_132, vp_c3.data[10].z, temp_134);
    // 0x000578: 0xEFF07F800A87FF07 Ast
    out_attr2.z = temp_138;
    // 0x000588: 0x49A0018C02670103 Ffma
    temp_140 = fma(temp_132, vp_c3.data[9].z, temp_135);
    // 0x000590: 0x49A0020C02270104 Ffma
    temp_141 = fma(temp_132, vp_c3.data[8].z, temp_136);
    // 0x000598: 0x49A0030C01E70106 Ffma
    temp_142 = fma(temp_132, vp_c3.data[7].z, temp_137);
    // 0x0005A8: 0x4C58100C02B70202 Fadd
    temp_143 = temp_139 + vp_c3.data[10].w;
    // 0x0005B0: 0x4C58100C02770303 Fadd
    temp_144 = temp_140 + vp_c3.data[9].w;
    // 0x0005B8: 0xEFF07F8007C7FF02 Ast
    gl_Position.w = temp_143;
    // 0x0005C8: 0x4C58100C02370404 Fadd
    temp_145 = temp_141 + vp_c3.data[8].w;
    // 0x0005D0: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_144;
    // 0x0005D8: 0x4C58100C01F70606 Fadd
    temp_146 = temp_142 + vp_c3.data[7].w;
    // 0x0005E8: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_145;
    // 0x0005F0: 0xEFF07F800707FF06 Ast
    gl_Position.x = temp_146;
    // 0x0005F8: 0xE30000000007000F Exit
    return;
}
