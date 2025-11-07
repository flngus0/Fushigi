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

layout (binding = 7, std140) uniform _vp_c6
{
    precise vec4 data[4096];
} vp_c6;

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
layout (location = 7) out vec4 out_attr7;
layout (location = 8) out vec4 out_attr8;


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
    int temp_14;
    uint temp_15;
    uint temp_16;
    int temp_17;
    precise float temp_18;
    int temp_19;
    uint temp_20;
    uint temp_21;
    int temp_22;
    precise float temp_23;
    precise float temp_24;
    precise float temp_25;
    precise float temp_26;
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    int temp_35;
    uint temp_36;
    uint temp_37;
    int temp_38;
    precise float temp_39;
    int temp_40;
    uint temp_41;
    int temp_42;
    precise float temp_43;
    int temp_44;
    uint temp_45;
    uint temp_46;
    int temp_47;
    precise float temp_48;
    int temp_49;
    uint temp_50;
    int temp_51;
    precise float temp_52;
    precise float temp_53;
    precise float temp_54;
    precise float temp_55;
    precise float temp_56;
    precise float temp_57;
    precise float temp_58;
    precise float temp_59;
    precise float temp_60;
    precise float temp_61;
    precise float temp_62;
    precise float temp_63;
    precise float temp_64;
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
    precise float temp_147;
    precise float temp_148;
    precise float temp_149;
    precise float temp_150;
    precise float temp_151;
    precise float temp_152;
    precise float temp_153;
    precise float temp_154;
    precise float temp_155;
    precise float temp_156;
    precise float temp_157;
    precise float temp_158;
    precise float temp_159;
    precise float temp_160;
    precise float temp_161;
    precise float temp_162;
    precise float temp_163;
    precise float temp_164;
    precise float temp_165;
    precise float temp_166;
    precise float temp_167;
    precise float temp_168;
    precise float temp_169;
    precise float temp_170;
    precise float temp_171;
    precise float temp_172;
    precise float temp_173;
    precise float temp_174;
    precise float temp_175;
    precise float temp_176;
    precise float temp_177;
    precise float temp_178;
    precise float temp_179;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079400A70016 Mov
    // 0x000010: 0xEFD87F800807FF01 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B7000F Mov
    // 0x000030: 0xEFD87F801047FF0D Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C9807940027000E Mov
    // 0x000048: 0xEFD87F800847FF07 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400370002 Mov
    // 0x000058: 0xEFD87F800A07FF05 Ald
    temp_5 = in_attr2.x;
    // 0x000068: 0x3848000000470014 Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800A47FF11 Ald
    temp_7 = in_attr2.y;
    // 0x000078: 0x4C6810100007010A Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800887FF09 Ald
    temp_9 = in_attr0.z;
    // 0x000090: 0x4C68101000470110 Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F800907FF06 Ald
    temp_11 = in_attr1.x;
    // 0x0000A8: 0x4C68101000870100 Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0xEFD87F801007FF08 Ald
    temp_13 = in_attr8.x;
    // 0x0000B8: 0xEF94007068871413 Ldc
    temp_14 = temp_6 + 0x688;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_15 >> 2;
    temp_17 = int(temp_15) & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x0000C8: 0xEF94007048871412 Ldc
    temp_19 = temp_6 + 0x488;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x0000D0: 0x51A00B1400C70D16 Ffma
    temp_24 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000D8: 0xEFD87F800947FF04 Ald
    temp_25 = in_attr1.y;
    // 0x0000E8: 0x51A0079400D70D0F Ffma
    temp_26 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000F0: 0xEFD87F800A87FF0C Ald
    temp_27 = in_attr2.z;
    // 0x0000F8: 0x51A0071400470D0E Ffma
    temp_28 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x000108: 0x49A005100017070A Ffma
    temp_29 = fma(temp_4, vp_c4.data[0].y, temp_8);
    // 0x000110: 0x49A0081000570710 Ffma
    temp_30 = fma(temp_4, vp_c4.data[1].y, temp_10);
    // 0x000118: 0x4C6810100007050B Fmul
    temp_31 = temp_5 * vp_c4.data[0].x;
    // 0x000128: 0x51A0011400570D0D Ffma
    temp_32 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000130: 0x49A0001000970707 Ffma
    temp_33 = fma(temp_4, vp_c4.data[2].y, temp_12);
    // 0x000138: 0x4C68101000870517 Fmul
    temp_34 = temp_5 * vp_c4.data[2].x;
    // 0x000148: 0xEF95007068071400 Ldc
    temp_35 = temp_6 + 0x680;
    temp_36 = uint(temp_35) >> 2;
    temp_37 = temp_36 >> 2;
    temp_38 = int(temp_36) & 3;
    temp_39 = vp_c7.data[int(temp_37)][temp_38];
    temp_40 = int(temp_36) + 1;
    temp_41 = uint(temp_40) >> 2;
    temp_42 = temp_40 & 3;
    temp_43 = vp_c7.data[int(temp_41)][temp_42];
    // 0x000150: 0xEF95007048071402 Ldc
    temp_44 = temp_6 + 0x480;
    temp_45 = uint(temp_44) >> 2;
    temp_46 = temp_45 >> 2;
    temp_47 = int(temp_45) & 3;
    temp_48 = vp_c7.data[int(temp_46)][temp_47];
    temp_49 = int(temp_45) + 1;
    temp_50 = uint(temp_49) >> 2;
    temp_51 = temp_49 & 3;
    temp_52 = vp_c7.data[int(temp_50)][temp_51];
    // 0x000158: 0x4C68101000470518 Fmul
    temp_53 = temp_5 * vp_c4.data[1].x;
    // 0x000168: 0xEFD87F800987FF05 Ald
    temp_54 = in_attr1.z;
    // 0x000170: 0x49A0059000171115 Ffma
    temp_55 = fma(temp_7, vp_c4.data[0].y, temp_31);
    // 0x000178: 0x4C6810100007061A Fmul
    temp_56 = temp_11 * vp_c4.data[0].x;
    // 0x000188: 0x49A00B900097110B Ffma
    temp_57 = fma(temp_7, vp_c4.data[2].y, temp_34);
    // 0x000190: 0x49A0039000A70917 Ffma
    temp_58 = fma(temp_9, vp_c4.data[2].z, temp_33);
    // 0x000198: 0x4C68101000870619 Fmul
    temp_59 = temp_11 * vp_c4.data[2].x;
    // 0x0001A8: 0x49A00C1000571111 Ffma
    temp_60 = fma(temp_7, vp_c4.data[1].y, temp_53);
    // 0x0001B0: 0x49A0081000670914 Ffma
    temp_61 = fma(temp_9, vp_c4.data[1].z, temp_30);
    // 0x0001B8: 0x4C6810100047061B Fmul
    temp_62 = temp_11 * vp_c4.data[1].x;
    // 0x0001C8: 0x49A00B1400870810 Ffma
    temp_63 = fma(temp_13, vp_c5.data[2].x, temp_24);
    // 0x0001D0: 0x4C58101000B71718 Fadd
    temp_64 = temp_58 + vp_c4.data[2].w;
    // 0x0001D8: 0x49A007940097080F Ffma
    temp_65 = fma(temp_13, vp_c5.data[2].y, temp_26);
    // 0x0001E8: 0x49A007140007080E Ffma
    temp_66 = fma(temp_13, vp_c5.data[0].x, temp_28);
    // 0x0001F0: 0x49A006940017080D Ffma
    temp_67 = fma(temp_13, vp_c5.data[0].y, temp_32);
    // 0x0001F8: 0x4C58101000771414 Fadd
    temp_68 = temp_61 + vp_c4.data[1].w;
    // 0x000208: 0x49A00D1000170406 Ffma
    temp_69 = fma(temp_25, vp_c4.data[0].y, temp_56);
    // 0x000210: 0x59A0098001271808 Ffma
    temp_70 = fma(temp_64, temp_23, temp_18);
    // 0x000218: 0x49A0051000270912 Ffma
    temp_71 = fma(temp_9, vp_c4.data[0].z, temp_29);
    // 0x000228: 0xEFD87F800AC7FF0A Ald
    temp_72 = in_attr2.w;
    // 0x000230: 0x49A00C9000970407 Ffma
    temp_73 = fma(temp_25, vp_c4.data[2].y, temp_59);
    // 0x000238: 0xEFF07F800DC7FF0F Ast
    out_attr5.w = temp_65;
    // 0x000248: 0x49A00A9000270C09 Ffma
    temp_74 = fma(temp_27, vp_c4.data[0].z, temp_55);
    // 0x000250: 0xEFF07F800D87FF10 Ast
    out_attr5.z = temp_63;
    // 0x000258: 0x49A0059000A70C0B Ffma
    temp_75 = fma(temp_27, vp_c4.data[2].z, temp_57);
    // 0x000268: 0xEFF07F800D07FF0E Ast
    out_attr5.x = temp_66;
    // 0x000270: 0x49A00D9000570404 Ffma
    temp_76 = fma(temp_25, vp_c4.data[1].y, temp_62);
    // 0x000278: 0xEFF07F800E07FF0E Ast
    out_attr6.x = temp_66;
    // 0x000288: 0x49A0089000670C0C Ffma
    temp_77 = fma(temp_27, vp_c4.data[1].z, temp_60);
    // 0x000290: 0xEFF07F800D47FF0D Ast
    out_attr5.y = temp_67;
    // 0x000298: 0x59A0008000371401 Ffma
    temp_78 = fma(temp_68, temp_52, temp_43);
    // 0x0002A8: 0xEFF07F800E47FF0D Ast
    out_attr6.y = temp_67;
    // 0x0002B0: 0x4C5810180BA70811 Fadd
    temp_79 = temp_70 + vp_c6.data[46].z;
    // 0x0002B8: 0x49A0031000270506 Ffma
    temp_80 = fma(temp_54, vp_c4.data[0].z, temp_69);
    // 0x0002C8: 0x4C58101000371203 Fadd
    temp_81 = temp_71 + vp_c4.data[0].w;
    // 0x0002D0: 0x49A0039000A70507 Ffma
    temp_82 = fma(temp_54, vp_c4.data[2].z, temp_73);
    // 0x0002D8: 0x49A0021000670504 Ffma
    temp_83 = fma(temp_54, vp_c4.data[1].z, temp_76);
    // 0x0002E8: 0x4C5810180B970113 Fadd
    temp_84 = temp_78 + vp_c6.data[46].y;
    // 0x0002F0: 0x4C6810180C671105 Fmul
    temp_85 = temp_79 * vp_c6.data[49].z;
    // 0x0002F8: 0x4C6810180C271114 Fmul
    temp_86 = temp_79 * vp_c6.data[48].z;
    // 0x000308: 0x4C6810180CA71115 Fmul
    temp_87 = temp_79 * vp_c6.data[50].z;
    // 0x000310: 0x5C68100000970911 Fmul
    temp_88 = temp_74 * temp_74;
    // 0x000318: 0x5C68100000670612 Fmul
    temp_89 = temp_80 * temp_80;
    // 0x000328: 0x59A0000000270303 Ffma
    temp_90 = fma(temp_81, temp_48, temp_39);
    // 0x000330: 0x49A002980C571305 Ffma
    temp_91 = fma(temp_84, vp_c6.data[49].y, temp_85);
    // 0x000338: 0x49A00A180C171302 Ffma
    temp_92 = fma(temp_84, vp_c6.data[48].y, temp_86);
    // 0x000348: 0x49A00A980C971300 Ffma
    temp_93 = fma(temp_84, vp_c6.data[50].y, temp_87);
    // 0x000350: 0x59A0088000C70C11 Ffma
    temp_94 = fma(temp_77, temp_77, temp_88);
    // 0x000358: 0x59A0090000470415 Ffma
    temp_95 = fma(temp_83, temp_83, temp_89);
    // 0x000368: 0x4C68100C00470312 Fmul
    temp_96 = temp_90 * vp_c3.data[1].x;
    // 0x000370: 0x4C5810180B87030F Fadd
    temp_97 = temp_90 + vp_c6.data[46].x;
    // 0x000378: 0x4C68100C00870313 Fmul
    temp_98 = temp_90 * vp_c3.data[2].x;
    // 0x000388: 0x4C68100C00070310 Fmul
    temp_99 = temp_90 * vp_c3.data[0].x;
    // 0x000390: 0x4C58300C02F70317 Fadd
    temp_100 = 0.0 - vp_c3.data[11].w;
    temp_101 = temp_90 + temp_100;
    // 0x000398: 0x4C5830180B07030E Fadd
    temp_102 = 0.0 - vp_c6.data[44].x;
    temp_103 = temp_90 + temp_102;
    // 0x0003A8: 0xEFF07F800B07FF17 Ast
    out_attr3.x = temp_101;
    // 0x0003B0: 0x59A0088000B70B14 Ffma
    temp_104 = fma(temp_75, temp_75, temp_94);
    // 0x0003B8: 0x59A00A8000770711 Ffma
    temp_105 = fma(temp_82, temp_82, temp_95);
    // 0x0003C8: 0x49A0090C00570103 Ffma
    temp_106 = fma(temp_78, vp_c3.data[1].y, temp_96);
    // 0x0003D0: 0x5080000000571111 Mufu
    temp_107 = inversesqrt(temp_105);
    // 0x0003D8: 0x49A001180C070F12 Ffma
    temp_108 = fma(temp_97, vp_c6.data[48].x, temp_92);
    // 0x0003E8: 0x5080000000571402 Mufu
    temp_109 = inversesqrt(temp_104);
    // 0x0003F0: 0x49A002980C470F16 Ffma
    temp_110 = fma(temp_97, vp_c6.data[49].x, temp_91);
    // 0x0003F8: 0x49A0080C0017010D Ffma
    temp_111 = fma(temp_78, vp_c3.data[0].y, temp_99);
    // 0x000408: 0x49A000180C870F00 Ffma
    temp_112 = fma(temp_97, vp_c6.data[50].x, temp_93);
    // 0x000410: 0x49A0098C00970105 Ffma
    temp_113 = fma(temp_78, vp_c3.data[2].y, temp_98);
    // 0x000418: 0x4C58101002070810 Fadd
    temp_114 = temp_70 + vp_c4.data[8].x;
    // 0x000428: 0x4C58300C03370118 Fadd
    temp_115 = 0.0 - vp_c3.data[12].w;
    temp_116 = temp_78 + temp_115;
    // 0x000430: 0x4C5830180B170115 Fadd
    temp_117 = 0.0 - vp_c6.data[44].y;
    temp_118 = temp_78 + temp_117;
    // 0x000438: 0xEFF07F800B47FF18 Ast
    out_attr3.y = temp_116;
    // 0x000448: 0x4C68101803870E0E Fmul
    temp_119 = temp_103 * vp_c6.data[14].x;
    // 0x000450: 0x4C6810180BB70013 Fmul
    temp_120 = temp_112 * vp_c6.data[46].w;
    // 0x000458: 0x5C68100001170707 Fmul
    temp_121 = temp_82 * temp_107;
    // 0x000468: 0xEFF07F801087FF13 Ast
    out_attr8.z = temp_120;
    // 0x000470: 0x49A0018C00671001 Ffma
    temp_122 = fma(temp_114, vp_c3.data[1].z, temp_106);
    // 0x000478: 0xEFF07F800887FF07 Ast
    out_attr0.z = temp_121;
    // 0x000488: 0x5C68100000270C0C Fmul
    temp_123 = temp_77 * temp_109;
    // 0x000490: 0x49A0028C00A71000 Ffma
    temp_124 = fma(temp_114, vp_c3.data[2].z, temp_113);
    // 0x000498: 0xEFF07F800947FF0C Ast
    out_attr1.y = temp_123;
    // 0x0004A8: 0x4C58300C03770819 Fadd
    temp_125 = 0.0 - vp_c3.data[13].w;
    temp_126 = temp_70 + temp_125;
    // 0x0004B0: 0x4C5830180B27080F Fadd
    temp_127 = 0.0 - vp_c6.data[44].z;
    temp_128 = temp_70 + temp_127;
    // 0x0004B8: 0xEFF07F800B87FF19 Ast
    out_attr3.z = temp_126;
    // 0x0004C8: 0x49A0018C00670803 Ffma
    temp_129 = fma(temp_70, vp_c3.data[1].z, temp_106);
    // 0x0004D0: 0x49A0028C00A70805 Ffma
    temp_130 = fma(temp_70, vp_c3.data[2].z, temp_113);
    // 0x0004D8: 0x49A0068C00270808 Ffma
    temp_131 = fma(temp_70, vp_c3.data[0].z, temp_111);
    // 0x0004E8: 0x49A007180397150E Ffma
    temp_132 = fma(temp_118, vp_c6.data[14].y, temp_119);
    // 0x0004F0: 0x49A0068C00271010 Ffma
    temp_133 = fma(temp_114, vp_c3.data[0].z, temp_111);
    // 0x0004F8: 0x5C68100001170404 Fmul
    temp_134 = temp_83 * temp_107;
    // 0x000508: 0x5C68100000270B0B Fmul
    temp_135 = temp_75 * temp_109;
    // 0x000510: 0xEFF07F800847FF04 Ast
    out_attr0.y = temp_134;
    // 0x000518: 0x5C68100000770C0D Fmul
    temp_136 = temp_123 * temp_121;
    // 0x000528: 0xEFF07F800987FF0B Ast
    out_attr1.z = temp_135;
    // 0x000530: 0x5C68100000270902 Fmul
    temp_137 = temp_74 * temp_109;
    // 0x000538: 0x5C68100001170606 Fmul
    temp_138 = temp_80 * temp_107;
    // 0x000548: 0xEFF07F800907FF02 Ast
    out_attr1.x = temp_137;
    // 0x000550: 0x4C58100C00370808 Fadd
    temp_139 = temp_131 + vp_c3.data[0].w;
    // 0x000558: 0xEFF07F800807FF06 Ast
    out_attr0.x = temp_138;
    // 0x000568: 0x49A0071803A70F0E Ffma
    temp_140 = fma(temp_128, vp_c6.data[14].z, temp_132);
    // 0x000570: 0x59A2068000470B0F Ffma
    temp_141 = 0.0 - temp_136;
    temp_142 = fma(temp_135, temp_134, temp_141);
    // 0x000578: 0x5C6810000047020D Fmul
    temp_143 = temp_137 * temp_134;
    // 0x000588: 0x5C68100000670B09 Fmul
    temp_144 = temp_135 * temp_138;
    // 0x000590: 0x4C58100C00770303 Fadd
    temp_145 = temp_129 + vp_c3.data[1].w;
    // 0x000598: 0x4C68101802C70808 Fmul
    temp_146 = temp_139 * vp_c6.data[11].x;
    // 0x0005A8: 0x4C98079803C70004 Mov
    // 0x0005B0: 0x4C58100C00371010 Fadd
    temp_147 = temp_133 + vp_c3.data[0].w;
    // 0x0005B8: 0x4C58100C00B70505 Fadd
    temp_148 = temp_130 + vp_c3.data[2].w;
    // 0x0005C8: 0x59A2048000770209 Ffma
    temp_149 = 0.0 - temp_144;
    temp_150 = fma(temp_137, temp_121, temp_149);
    // 0x0005D0: 0xEFF07F800C87FF05 Ast
    out_attr4.z = temp_148;
    // 0x0005D8: 0x49A0041802D70303 Ffma
    temp_151 = fma(temp_145, vp_c6.data[11].y, temp_146);
    // 0x0005E8: 0x59A2068000670C0D Ffma
    temp_152 = 0.0 - temp_143;
    temp_153 = fma(temp_123, temp_138, temp_152);
    // 0x0005F0: 0x51A0021803B70E0E Ffma
    temp_154 = fma(temp_140, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0005F8: 0x4C58100C00770101 Fadd
    temp_155 = temp_122 + vp_c3.data[1].w;
    // 0x000608: 0xEFF07F800F47FF0E Ast
    out_attr7.y = temp_154;
    // 0x000610: 0x4C68100C02071002 Fmul
    temp_156 = temp_147 * vp_c3.data[8].x;
    // 0x000618: 0x4C68100C02871004 Fmul
    temp_157 = temp_147 * vp_c3.data[10].x;
    // 0x000628: 0x4C68100C02471006 Fmul
    temp_158 = temp_147 * vp_c3.data[9].x;
    // 0x000630: 0x4C68100C01C71010 Fmul
    temp_159 = temp_147 * vp_c3.data[7].x;
    // 0x000638: 0x49A0019802E70503 Ffma
    temp_160 = fma(temp_148, vp_c6.data[11].z, temp_151);
    // 0x000648: 0x4C58100C00B70000 Fadd
    temp_161 = temp_124 + vp_c3.data[2].w;
    // 0x000650: 0x49A0010C02170102 Ffma
    temp_162 = fma(temp_155, vp_c3.data[8].y, temp_156);
    // 0x000658: 0x49A0020C02970105 Ffma
    temp_163 = fma(temp_155, vp_c3.data[10].y, temp_157);
    // 0x000668: 0x49A0030C02570106 Ffma
    temp_164 = fma(temp_155, vp_c3.data[9].y, temp_158);
    // 0x000670: 0x49A0080C01D70101 Ffma
    temp_165 = fma(temp_155, vp_c3.data[7].y, temp_159);
    // 0x000678: 0x4C98079803070008 Mov
    // 0x000688: 0x4C6810180BB71616 Fmul
    temp_166 = temp_110 * vp_c6.data[46].w;
    // 0x000690: 0x49A0010C02270002 Ffma
    temp_167 = fma(temp_161, vp_c3.data[8].z, temp_162);
    // 0x000698: 0xEFF07F801047FF16 Ast
    out_attr8.y = temp_166;
    // 0x0006A8: 0x49A0028C02A70005 Ffma
    temp_168 = fma(temp_161, vp_c3.data[10].z, temp_163);
    // 0x0006B0: 0x49A0030C02670006 Ffma
    temp_169 = fma(temp_161, vp_c3.data[9].z, temp_164);
    // 0x0006B8: 0x49A0008C01E70001 Ffma
    temp_170 = fma(temp_161, vp_c3.data[7].z, temp_165);
    // 0x0006C8: 0x4C6810180BB71212 Fmul
    temp_171 = temp_108 * vp_c6.data[46].w;
    // 0x0006D0: 0x5C68100000A70F0F Fmul
    temp_172 = temp_142 * temp_72;
    // 0x0006D8: 0xEFF07F801007FF12 Ast
    out_attr8.x = temp_171;
    // 0x0006E8: 0x5C68100000A70909 Fmul
    temp_173 = temp_150 * temp_72;
    // 0x0006F0: 0xEFF07F800A07FF0F Ast
    out_attr2.x = temp_172;
    // 0x0006F8: 0x5C68100000A70D0D Fmul
    temp_174 = temp_153 * temp_72;
    // 0x000708: 0xEFF07F800A47FF09 Ast
    out_attr2.y = temp_173;
    // 0x000710: 0x51A0041802F70303 Ffma
    temp_175 = fma(temp_160, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000718: 0xEFF07F800A87FF0D Ast
    out_attr2.z = temp_174;
    // 0x000728: 0x4C58100C02370202 Fadd
    temp_176 = temp_167 + vp_c3.data[8].w;
    // 0x000730: 0xEFF07F800F07FF03 Ast
    out_attr7.x = temp_175;
    // 0x000738: 0x4C58100C02B70505 Fadd
    temp_177 = temp_168 + vp_c3.data[10].w;
    // 0x000748: 0xEFF07F800747FF02 Ast
    gl_Position.y = temp_176;
    // 0x000750: 0x4C58100C02770606 Fadd
    temp_178 = temp_169 + vp_c3.data[9].w;
    // 0x000758: 0xEFF07F8007C7FF05 Ast
    gl_Position.w = temp_177;
    // 0x000768: 0x4C58100C01F70101 Fadd
    temp_179 = temp_170 + vp_c3.data[7].w;
    // 0x000770: 0xEFF07F800787FF06 Ast
    gl_Position.z = temp_178;
    // 0x000778: 0xEFF07F800707FF01 Ast
    gl_Position.x = temp_179;
    // 0x000788: 0xE30000000007000F Exit
    return;
}
