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

layout (binding = 6, std140) uniform _vp_c5
{
    precise vec4 data[4096];
} vp_c5;

layout (binding = 5, std140) uniform _vp_c4
{
    precise vec4 data[4096];
} vp_c4;

layout (binding = 2, std140) uniform _vp_c1
{
    precise vec4 data[4096];
} vp_c1;

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
layout (location = 12) in vec4 in_attr12;

layout (location = 0) out vec4 out_attr0;
layout (location = 1) out vec4 out_attr1;
layout (location = 2) out vec4 out_attr2;
layout (location = 3) out vec4 out_attr3;
layout (location = 4) out vec4 out_attr4;
layout (location = 5) out vec4 out_attr5;
layout (location = 6) out vec4 out_attr6;
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;
layout (location = 10) out vec4 out_attr10;


void main()
{
    precise float temp_0;
    precise float temp_1;
    precise float temp_2;
    precise float temp_3;
    precise float temp_4;
    precise float temp_5;
    precise float temp_6;
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
    precise float temp_27;
    precise float temp_28;
    precise float temp_29;
    precise float temp_30;
    precise float temp_31;
    precise float temp_32;
    precise float temp_33;
    precise float temp_34;
    int temp_35;
    precise float temp_36;
    precise float temp_37;
    precise float temp_38;
    precise float temp_39;
    precise float temp_40;
    precise float temp_41;
    precise float temp_42;
    precise float temp_43;
    precise float temp_44;
    precise float temp_45;
    precise float temp_46;
    precise float temp_47;
    precise float temp_48;
    precise float temp_49;
    int temp_50;
    precise float temp_51;
    precise float temp_52;
    precise float temp_53;
    int temp_54;
    uint temp_55;
    uint temp_56;
    int temp_57;
    precise float temp_58;
    precise float temp_59;
    int temp_60;
    uint temp_61;
    uint temp_62;
    int temp_63;
    precise float temp_64;
    precise float temp_65;
    precise float temp_66;
    precise float temp_67;
    int temp_68;
    uint temp_69;
    uint temp_70;
    int temp_71;
    precise float temp_72;
    int temp_73;
    uint temp_74;
    int temp_75;
    precise float temp_76;
    precise float temp_77;
    int temp_78;
    uint temp_79;
    uint temp_80;
    int temp_81;
    precise float temp_82;
    int temp_83;
    uint temp_84;
    int temp_85;
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
    precise float temp_180;
    precise float temp_181;
    precise float temp_182;
    precise float temp_183;
    precise float temp_184;
    precise float temp_185;
    precise float temp_186;
    precise float temp_187;
    precise float temp_188;
    precise float temp_189;
    precise float temp_190;
    precise float temp_191;
    precise float temp_192;
    precise float temp_193;
    precise float temp_194;
    precise float temp_195;
    precise float temp_196;
    precise float temp_197;
    precise float temp_198;
    precise float temp_199;
    precise float temp_200;
    precise float temp_201;
    precise float temp_202;
    precise float temp_203;
    precise float temp_204;
    precise float temp_205;
    gl_Position.x = 0.0;
    gl_Position.y = 0.0;
    gl_Position.z = 0.0;
    gl_Position.w = 1.0;
    // 0x000008: 0x4C98079404A70001 Mov
    // 0x000010: 0xEFD87F800807FF00 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4C68101C23070101 Fmul
    temp_1 = vp_c5.data[18].z * vp_c7.data[140].x;
    // 0x000028: 0xEFD87F800A07FF07 Ald
    temp_2 = in_attr2.x;
    // 0x000030: 0x38681044A0070101 Fmul
    temp_3 = temp_1 * 1280.0;
    // 0x000038: 0xEFD87F800907FF10 Ald
    temp_4 = in_attr1.x;
    // 0x000048: 0x4C68101404870002 Fmul
    temp_5 = temp_0 * vp_c5.data[18].x;
    // 0x000050: 0xEFD87F800A47FF0E Ald
    temp_6 = in_attr2.y;
    // 0x000058: 0x32A000C348070201 Ffma
    temp_7 = fma(temp_5, 200.0, temp_3);
    // 0x000068: 0xEFD87F800947FF11 Ald
    temp_8 = in_attr1.y;
    // 0x000070: 0x4C68101000070704 Fmul
    temp_9 = temp_2 * vp_c4.data[0].x;
    // 0x000078: 0xEFD87F800A87FF0F Ald
    temp_10 = in_attr2.z;
    // 0x000088: 0x4C68101000870705 Fmul
    temp_11 = temp_2 * vp_c4.data[2].x;
    // 0x000090: 0xEFD87F800987FF0A Ald
    temp_12 = in_attr1.z;
    // 0x000098: 0x1E23C8EFA3570101 Fmul32i
    temp_13 = temp_7 * 0.0174532924;
    // 0x0000A8: 0xEFD87F801047FF03 Ald
    temp_14 = in_attr8.y;
    // 0x0000B0: 0x4C68101000470707 Fmul
    temp_15 = temp_2 * vp_c4.data[1].x;
    // 0x0000B8: 0xEFD87F801407FF02 Ald
    temp_16 = in_attr12.x;
    // 0x0000C8: 0x4C6810100007100B Fmul
    temp_17 = temp_4 * vp_c4.data[0].x;
    // 0x0000D0: 0xEFD87F801007FF08 Ald
    temp_18 = in_attr8.x;
    // 0x0000D8: 0x5C90000000170012 Rro
    // 0x0000E8: 0xEFD87F800847FF01 Ald
    temp_19 = in_attr0.y;
    // 0x0000F0: 0x49A0021000170E04 Ffma
    temp_20 = fma(temp_6, vp_c4.data[0].y, temp_9);
    // 0x0000F8: 0x49A0029000970E06 Ffma
    temp_21 = fma(temp_6, vp_c4.data[2].y, temp_11);
    // 0x000108: 0x5080000000171205 Mufu
    temp_22 = sin(temp_13);
    // 0x000110: 0x4C6810100087100C Fmul
    temp_23 = temp_4 * vp_c4.data[2].x;
    // 0x000118: 0x4C68101000471010 Fmul
    temp_24 = temp_4 * vp_c4.data[1].x;
    // 0x000128: 0x49A0039000570E09 Ffma
    temp_25 = fma(temp_6, vp_c4.data[1].y, temp_15);
    // 0x000130: 0x49A005900017110B Ffma
    temp_26 = fma(temp_8, vp_c4.data[0].y, temp_17);
    // 0x000138: 0x49A0021000270F0E Ffma
    temp_27 = fma(temp_10, vp_c4.data[0].z, temp_20);
    // 0x000148: 0x49A0031000A70F06 Ffma
    temp_28 = fma(temp_10, vp_c4.data[2].z, temp_21);
    // 0x000150: 0x49A006100097110D Ffma
    temp_29 = fma(temp_8, vp_c4.data[2].y, temp_23);
    // 0x000158: 0x49A0081000571110 Ffma
    temp_30 = fma(temp_8, vp_c4.data[1].y, temp_24);
    // 0x000168: 0x49A0049000670F0F Ffma
    temp_31 = fma(temp_10, vp_c4.data[1].z, temp_25);
    // 0x000170: 0x49A0059000270A04 Ffma
    temp_32 = fma(temp_12, vp_c4.data[0].z, temp_26);
    // 0x000178: 0x4C98079400270011 Mov
    // 0x000188: 0x5C68100000E70E09 Fmul
    temp_33 = temp_27 * temp_27;
    // 0x000190: 0x4CB0119002371A0B F2i
    temp_34 = trunc(vp_c4.data[8].w);
    temp_35 = int(temp_34);
    // 0x000198: 0x4C98079400370012 Mov
    // 0x0001A8: 0x4C68101404B70507 Fmul
    temp_36 = temp_22 * vp_c5.data[18].w;
    // 0x0001B0: 0x49A0081000670A05 Ffma
    temp_37 = fma(temp_12, vp_c4.data[1].z, temp_30);
    // 0x0001B8: 0x5C68100000470410 Fmul
    temp_38 = temp_32 * temp_32;
    // 0x0001C8: 0x51A0089400470311 Ffma
    temp_39 = fma(temp_14, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0001D0: 0x59A0048000F70F0C Ffma
    temp_40 = fma(temp_31, temp_31, temp_33);
    // 0x0001D8: 0x51A0091400570312 Ffma
    temp_41 = fma(temp_14, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x0001E8: 0x5C68100000270702 Fmul
    temp_42 = temp_36 * temp_16;
    // 0x0001F0: 0xEFD87F800887FF07 Ald
    temp_43 = in_attr0.z;
    // 0x0001F8: 0x49A0069000A70A0A Ffma
    temp_44 = fma(temp_12, vp_c4.data[2].z, temp_29);
    // 0x000208: 0x59A0080000570503 Ffma
    temp_45 = fma(temp_37, temp_37, temp_38);
    // 0x000210: 0x49A0089400070809 Ffma
    temp_46 = fma(temp_18, vp_c5.data[0].x, temp_39);
    // 0x000218: 0x59A0060000670610 Ffma
    temp_47 = fma(temp_28, temp_28, temp_40);
    // 0x000228: 0x49A0091400170808 Ffma
    temp_48 = fma(temp_18, vp_c5.data[0].y, temp_41);
    // 0x000230: 0x5080000000571015 Mufu
    temp_49 = inversesqrt(temp_47);
    // 0x000238: 0x3848000000470B12 Shl
    temp_50 = temp_35 << 4;
    // 0x000248: 0x49A000040007020B Ffma
    temp_51 = fma(temp_42, vp_c1.data[0].x, temp_0);
    // 0x000250: 0x49A0008400070211 Ffma
    temp_52 = fma(temp_42, vp_c1.data[0].x, temp_19);
    // 0x000258: 0x59A0018000A70A17 Ffma
    temp_53 = fma(temp_44, temp_44, temp_45);
    // 0x000268: 0xEF9400706887120C Ldc
    temp_54 = temp_50 + 0x688;
    temp_55 = uint(temp_54) >> 2;
    temp_56 = temp_55 >> 2;
    temp_57 = int(temp_55) & 3;
    temp_58 = vp_c7.data[int(temp_56)][temp_57];
    // 0x000270: 0x5C68100001570E10 Fmul
    temp_59 = temp_27 * temp_49;
    // 0x000278: 0xEF9400704887120D Ldc
    temp_60 = temp_50 + 0x488;
    temp_61 = uint(temp_60) >> 2;
    temp_62 = temp_61 >> 2;
    temp_63 = int(temp_61) & 3;
    temp_64 = vp_c7.data[int(temp_62)][temp_63];
    // 0x000288: 0x4C68101000870B16 Fmul
    temp_65 = temp_51 * vp_c4.data[2].x;
    // 0x000290: 0x5080000000571717 Mufu
    temp_66 = inversesqrt(temp_53);
    // 0x000298: 0x5C68100001570F0F Fmul
    temp_67 = temp_31 * temp_49;
    // 0x0002A8: 0xEF95007068071200 Ldc
    temp_68 = temp_50 + 0x680;
    temp_69 = uint(temp_68) >> 2;
    temp_70 = temp_69 >> 2;
    temp_71 = int(temp_69) & 3;
    temp_72 = vp_c7.data[int(temp_70)][temp_71];
    temp_73 = int(temp_69) + 1;
    temp_74 = uint(temp_73) >> 2;
    temp_75 = temp_73 & 3;
    temp_76 = vp_c7.data[int(temp_74)][temp_75];
    // 0x0002B0: 0x5C68100001570606 Fmul
    temp_77 = temp_28 * temp_49;
    // 0x0002B8: 0xEF95007048071202 Ldc
    temp_78 = temp_50 + 0x480;
    temp_79 = uint(temp_78) >> 2;
    temp_80 = temp_79 >> 2;
    temp_81 = int(temp_79) & 3;
    temp_82 = vp_c7.data[int(temp_80)][temp_81];
    temp_83 = int(temp_79) + 1;
    temp_84 = uint(temp_83) >> 2;
    temp_85 = temp_83 & 3;
    temp_86 = vp_c7.data[int(temp_84)][temp_85];
    // 0x0002C8: 0x4C68101000070B13 Fmul
    temp_87 = temp_51 * vp_c4.data[0].x;
    // 0x0002D0: 0x4C68101000470B14 Fmul
    temp_88 = temp_51 * vp_c4.data[1].x;
    // 0x0002D8: 0xEFD87F800AC7FF0B Ald
    temp_89 = in_attr2.w;
    // 0x0002E8: 0x49A00B1000971116 Ffma
    temp_90 = fma(temp_52, vp_c4.data[2].y, temp_65);
    // 0x0002F0: 0xEFF07F800E07FF09 Ast
    out_attr6.x = temp_46;
    // 0x0002F8: 0x49A009900017110E Ffma
    temp_91 = fma(temp_52, vp_c4.data[0].y, temp_87);
    // 0x000308: 0xEFF07F800E47FF08 Ast
    out_attr6.y = temp_48;
    // 0x000310: 0x49A00A1000571114 Ffma
    temp_92 = fma(temp_52, vp_c4.data[1].y, temp_88);
    // 0x000318: 0xEFF07F800987FF06 Ast
    out_attr1.z = temp_77;
    // 0x000328: 0x49A00B1000A70716 Ffma
    temp_93 = fma(temp_43, vp_c4.data[2].z, temp_90);
    // 0x000330: 0xEFF07F800907FF10 Ast
    out_attr1.x = temp_59;
    // 0x000338: 0x49A007100027070E Ffma
    temp_94 = fma(temp_43, vp_c4.data[0].z, temp_91);
    // 0x000348: 0xEFF07F800947FF0F Ast
    out_attr1.y = temp_67;
    // 0x000350: 0x5C68100001770A0A Fmul
    temp_95 = temp_44 * temp_66;
    // 0x000358: 0x5C68100001770404 Fmul
    temp_96 = temp_32 * temp_66;
    // 0x000368: 0xEFF07F800887FF0A Ast
    out_attr0.z = temp_95;
    // 0x000370: 0x5C68100001770505 Fmul
    temp_97 = temp_37 * temp_66;
    // 0x000378: 0xEFF07F800807FF04 Ast
    out_attr0.x = temp_96;
    // 0x000388: 0x49A00A1000670714 Ffma
    temp_98 = fma(temp_43, vp_c4.data[1].z, temp_92);
    // 0x000390: 0xEFF07F800847FF05 Ast
    out_attr0.y = temp_97;
    // 0x000398: 0x4C58101000B71616 Fadd
    temp_99 = temp_93 + vp_c4.data[2].w;
    // 0x0003A8: 0x4C58101000370E07 Fadd
    temp_100 = temp_94 + vp_c4.data[0].w;
    // 0x0003B0: 0x5C68100000A70F13 Fmul
    temp_101 = temp_67 * temp_95;
    // 0x0003B8: 0x5C68100000470611 Fmul
    temp_102 = temp_77 * temp_96;
    // 0x0003C8: 0x5C68100000571012 Fmul
    temp_103 = temp_59 * temp_97;
    // 0x0003D0: 0x4C58101000771414 Fadd
    temp_104 = temp_98 + vp_c4.data[1].w;
    // 0x0003D8: 0x59A0060000D7160C Ffma
    temp_105 = fma(temp_99, temp_64, temp_58);
    // 0x0003E8: 0x59A0000000270702 Ffma
    temp_106 = fma(temp_100, temp_82, temp_72);
    // 0x0003F0: 0xEFF07F800D87FF0C Ast
    out_attr5.z = temp_105;
    // 0x0003F8: 0x59A2098000570609 Ffma
    temp_107 = 0.0 - temp_101;
    temp_108 = fma(temp_77, temp_97, temp_107);
    // 0x000408: 0xEFF07F800D07FF02 Ast
    out_attr5.x = temp_106;
    // 0x000410: 0x59A2088000A71011 Ffma
    temp_109 = 0.0 - temp_102;
    temp_110 = fma(temp_59, temp_95, temp_109);
    // 0x000418: 0x59A2090000470F12 Ffma
    temp_111 = 0.0 - temp_103;
    temp_112 = fma(temp_67, temp_96, temp_111);
    // 0x000428: 0x59A0008000371403 Ffma
    temp_113 = fma(temp_104, temp_86, temp_76);
    // 0x000430: 0x4C5810180BA70C01 Fadd
    temp_114 = temp_105 + vp_c6.data[46].z;
    // 0x000438: 0xEFF07F800D47FF03 Ast
    out_attr5.y = temp_113;
    // 0x000448: 0x4C5830180B070208 Fadd
    temp_115 = 0.0 - vp_c6.data[44].x;
    temp_116 = temp_106 + temp_115;
    // 0x000450: 0x5C68100000B70909 Fmul
    temp_117 = temp_108 * temp_89;
    // 0x000458: 0x5C68100000B71111 Fmul
    temp_118 = temp_110 * temp_89;
    // 0x000468: 0xEFF07F800A07FF09 Ast
    out_attr2.x = temp_117;
    // 0x000470: 0x5C68100000B71212 Fmul
    temp_119 = temp_112 * temp_89;
    // 0x000478: 0xEFF07F800A47FF11 Ast
    out_attr2.y = temp_118;
    // 0x000488: 0x4C5810180B970300 Fadd
    temp_120 = temp_113 + vp_c6.data[46].y;
    // 0x000490: 0xEFF07F800A87FF12 Ast
    out_attr2.z = temp_119;
    // 0x000498: 0x4C6810180C270106 Fmul
    temp_121 = temp_114 * vp_c6.data[48].z;
    // 0x0004A8: 0x4C6810180C670107 Fmul
    temp_122 = temp_114 * vp_c6.data[49].z;
    // 0x0004B0: 0x4C6810180CA7010B Fmul
    temp_123 = temp_114 * vp_c6.data[50].z;
    // 0x0004B8: 0x4C5830180B17030D Fadd
    temp_124 = 0.0 - vp_c6.data[44].y;
    temp_125 = temp_113 + temp_124;
    // 0x0004C8: 0x4C68101803870808 Fmul
    temp_126 = temp_116 * vp_c6.data[14].x;
    // 0x0004D0: 0x4C58300C02F7020E Fadd
    temp_127 = 0.0 - vp_c3.data[11].w;
    temp_128 = temp_106 + temp_127;
    // 0x0004D8: 0x49A003180C170006 Ffma
    temp_129 = fma(temp_120, vp_c6.data[48].y, temp_121);
    // 0x0004E8: 0xEFF07F800B07FF0E Ast
    out_attr3.x = temp_128;
    // 0x0004F0: 0x49A003980C570007 Ffma
    temp_130 = fma(temp_120, vp_c6.data[49].y, temp_122);
    // 0x0004F8: 0x49A005980C97000B Ffma
    temp_131 = fma(temp_120, vp_c6.data[50].y, temp_123);
    // 0x000508: 0x49A0041803970D0D Ffma
    temp_132 = fma(temp_125, vp_c6.data[14].y, temp_126);
    // 0x000510: 0x4C5830180B270C00 Fadd
    temp_133 = 0.0 - vp_c6.data[44].z;
    temp_134 = temp_105 + temp_133;
    // 0x000518: 0x4C68100C00870208 Fmul
    temp_135 = temp_106 * vp_c3.data[2].x;
    // 0x000528: 0x4C68100C00070210 Fmul
    temp_136 = temp_106 * vp_c3.data[0].x;
    // 0x000530: 0x4C68100C00470211 Fmul
    temp_137 = temp_106 * vp_c3.data[1].x;
    // 0x000538: 0x4C5810180B870201 Fadd
    temp_138 = temp_106 + vp_c6.data[46].x;
    // 0x000548: 0x4C58300C03770C13 Fadd
    temp_139 = 0.0 - vp_c3.data[13].w;
    temp_140 = temp_105 + temp_139;
    // 0x000550: 0x49A0069803A70000 Ffma
    temp_141 = fma(temp_134, vp_c6.data[14].z, temp_132);
    // 0x000558: 0xEFF07F800B87FF13 Ast
    out_attr3.z = temp_140;
    // 0x000568: 0x49A001040007040D Ffma
    temp_142 = fma(temp_96, vp_c1.data[0].x, temp_106);
    // 0x000570: 0x49A0040C0097030E Ffma
    temp_143 = fma(temp_113, vp_c3.data[2].y, temp_135);
    // 0x000578: 0x4C58101002070C08 Fadd
    temp_144 = temp_105 + vp_c4.data[8].x;
    // 0x000588: 0x49A0080C0017030F Ffma
    temp_145 = fma(temp_113, vp_c3.data[0].y, temp_136);
    // 0x000590: 0x49A0018400070504 Ffma
    temp_146 = fma(temp_97, vp_c1.data[0].x, temp_113);
    // 0x000598: 0x49A0088C00570311 Ffma
    temp_147 = fma(temp_113, vp_c3.data[1].y, temp_137);
    // 0x0005A8: 0x4C58300C03370310 Fadd
    temp_148 = 0.0 - vp_c3.data[12].w;
    temp_149 = temp_113 + temp_148;
    // 0x0005B0: 0x4C68100C0AC70D03 Fmul
    temp_150 = temp_142 * vp_c3.data[43].x;
    // 0x0005B8: 0xEFF07F800B47FF10 Ast
    out_attr3.y = temp_149;
    // 0x0005C8: 0x49A003180C070109 Ffma
    temp_151 = fma(temp_138, vp_c6.data[48].x, temp_129);
    // 0x0005D0: 0x49A003980C470107 Ffma
    temp_152 = fma(temp_138, vp_c6.data[49].x, temp_130);
    // 0x0005D8: 0x49A005980C870101 Ffma
    temp_153 = fma(temp_138, vp_c6.data[50].x, temp_131);
    // 0x0005E8: 0x49A0070C00A70C0B Ffma
    temp_154 = fma(temp_105, vp_c3.data[2].z, temp_143);
    // 0x0005F0: 0x49A0070C00A70802 Ffma
    temp_155 = fma(temp_144, vp_c3.data[2].z, temp_143);
    // 0x0005F8: 0x4C68100C0B470D0E Fmul
    temp_156 = temp_142 * vp_c3.data[45].x;
    // 0x000608: 0x4C68100C0B070D12 Fmul
    temp_157 = temp_142 * vp_c3.data[44].x;
    // 0x000610: 0x49A0060400070A05 Ffma
    temp_158 = fma(temp_95, vp_c1.data[0].x, temp_105);
    // 0x000618: 0x4C68100C0A870D0D Fmul
    temp_159 = temp_142 * vp_c3.data[42].x;
    // 0x000628: 0x49A0018C0AD70403 Ffma
    temp_160 = fma(temp_146, vp_c3.data[43].y, temp_150);
    // 0x000630: 0x49A0078C0027080A Ffma
    temp_161 = fma(temp_144, vp_c3.data[0].z, temp_145);
    // 0x000638: 0x49A0078C00270C0F Ffma
    temp_162 = fma(temp_105, vp_c3.data[0].z, temp_145);
    // 0x000648: 0x4C98079803C70006 Mov
    // 0x000650: 0x49A0070C0B57040E Ffma
    temp_163 = fma(temp_146, vp_c3.data[45].y, temp_156);
    // 0x000658: 0x49A0090C0B170412 Ffma
    temp_164 = fma(temp_146, vp_c3.data[44].y, temp_157);
    // 0x000668: 0x49A0068C0A970404 Ffma
    temp_165 = fma(temp_146, vp_c3.data[42].y, temp_159);
    // 0x000670: 0x49A0018C0AE70503 Ffma
    temp_166 = fma(temp_158, vp_c3.data[43].z, temp_160);
    // 0x000678: 0x49A0088C00670808 Ffma
    temp_167 = fma(temp_144, vp_c3.data[1].z, temp_147);
    // 0x000688: 0x4C58100C00370A0A Fadd
    temp_168 = temp_161 + vp_c3.data[0].w;
    // 0x000690: 0x49A0088C00670C11 Ffma
    temp_169 = fma(temp_105, vp_c3.data[1].z, temp_147);
    // 0x000698: 0x4C58100C00370F0F Fadd
    temp_170 = temp_162 + vp_c3.data[0].w;
    // 0x0006A8: 0x4C6810180BB70101 Fmul
    temp_171 = temp_153 * vp_c6.data[46].w;
    // 0x0006B0: 0x51A0031803B70006 Ffma
    temp_172 = fma(temp_141, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x0006B8: 0xEFF07F801287FF01 Ast
    out_attr10.z = temp_171;
    // 0x0006C8: 0x49A0070C0B67050E Ffma
    temp_173 = fma(temp_158, vp_c3.data[45].z, temp_163);
    // 0x0006D0: 0xEFF07F801047FF06 Ast
    out_attr8.y = temp_172;
    // 0x0006D8: 0x49A0090C0B270512 Ffma
    temp_174 = fma(temp_158, vp_c3.data[44].z, temp_164);
    // 0x0006E8: 0x49A0020C0AA70504 Ffma
    temp_175 = fma(temp_158, vp_c3.data[42].z, temp_165);
    // 0x0006F0: 0x4C58100C0AF70300 Fadd
    temp_176 = temp_166 + vp_c3.data[43].w;
    // 0x0006F8: 0x4C58100C00770808 Fadd
    temp_177 = temp_167 + vp_c3.data[1].w;
    // 0x000708: 0xEFF07F801147FF00 Ast
    out_attr9.y = temp_176;
    // 0x000710: 0x4C68100C02070A01 Fmul
    temp_178 = temp_168 * vp_c3.data[8].x;
    // 0x000718: 0x4C68100C02870A03 Fmul
    temp_179 = temp_168 * vp_c3.data[10].x;
    // 0x000728: 0x4C68100C02470A05 Fmul
    temp_180 = temp_168 * vp_c3.data[9].x;
    // 0x000730: 0x4C58100C00771111 Fadd
    temp_181 = temp_169 + vp_c3.data[1].w;
    // 0x000738: 0x4C68101802C70F0F Fmul
    temp_182 = temp_170 * vp_c6.data[11].x;
    // 0x000748: 0x4C68100C01C70A0A Fmul
    temp_183 = temp_168 * vp_c3.data[7].x;
    // 0x000750: 0x49A0008C02170801 Ffma
    temp_184 = fma(temp_177, vp_c3.data[8].y, temp_178);
    // 0x000758: 0x49A0018C02970803 Ffma
    temp_185 = fma(temp_177, vp_c3.data[10].y, temp_179);
    // 0x000768: 0x49A0028C02570805 Ffma
    temp_186 = fma(temp_177, vp_c3.data[9].y, temp_180);
    // 0x000770: 0x4C58100C00B70B0B Fadd
    temp_187 = temp_154 + vp_c3.data[2].w;
    // 0x000778: 0x49A0079802D71111 Ffma
    temp_188 = fma(temp_181, vp_c6.data[11].y, temp_182);
    // 0x000788: 0xEFF07F800C87FF0B Ast
    out_attr4.z = temp_187;
    // 0x000790: 0x4C58100C00B70202 Fadd
    temp_189 = temp_155 + vp_c3.data[2].w;
    // 0x000798: 0x49A0050C01D70808 Ffma
    temp_190 = fma(temp_177, vp_c3.data[7].y, temp_183);
    // 0x0007A8: 0x4C98079803070006 Mov
    // 0x0007B0: 0x4C6810180BB70909 Fmul
    temp_191 = temp_151 * vp_c6.data[46].w;
    // 0x0007B8: 0x4C6810180BB70707 Fmul
    temp_192 = temp_152 * vp_c6.data[46].w;
    // 0x0007C8: 0xEFF07F801207FF09 Ast
    out_attr10.x = temp_191;
    // 0x0007D0: 0x49A0089802E70B11 Ffma
    temp_193 = fma(temp_187, vp_c6.data[11].z, temp_188);
    // 0x0007D8: 0xEFF07F801247FF07 Ast
    out_attr10.y = temp_192;
    // 0x0007E8: 0x49A0008C02270201 Ffma
    temp_194 = fma(temp_189, vp_c3.data[8].z, temp_184);
    // 0x0007F0: 0x49A0018C02A70203 Ffma
    temp_195 = fma(temp_189, vp_c3.data[10].z, temp_185);
    // 0x0007F8: 0x49A0028C02670205 Ffma
    temp_196 = fma(temp_189, vp_c3.data[9].z, temp_186);
    // 0x000808: 0x49A0040C01E70208 Ffma
    temp_197 = fma(temp_189, vp_c3.data[7].z, temp_190);
    // 0x000810: 0x4C58100C0B770E0E Fadd
    temp_198 = temp_173 + vp_c3.data[45].w;
    // 0x000818: 0x4C58100C0B371212 Fadd
    temp_199 = temp_174 + vp_c3.data[44].w;
    // 0x000828: 0xEFF07F8011C7FF0E Ast
    out_attr9.w = temp_198;
    // 0x000830: 0x4C58100C0AB70404 Fadd
    temp_200 = temp_175 + vp_c3.data[42].w;
    // 0x000838: 0xEFF07F801187FF12 Ast
    out_attr9.z = temp_199;
    // 0x000848: 0x51A0031802F71111 Ffma
    temp_201 = fma(temp_193, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000850: 0xEFF07F801107FF04 Ast
    out_attr9.x = temp_200;
    // 0x000858: 0x4C58100C02370101 Fadd
    temp_202 = temp_194 + vp_c3.data[8].w;
    // 0x000868: 0xEFF07F801007FF11 Ast
    out_attr8.x = temp_201;
    // 0x000870: 0x4C58100C02B70303 Fadd
    temp_203 = temp_195 + vp_c3.data[10].w;
    // 0x000878: 0xEFF07F800747FF01 Ast
    gl_Position.y = temp_202;
    // 0x000888: 0x4C58100C02770505 Fadd
    temp_204 = temp_196 + vp_c3.data[9].w;
    // 0x000890: 0xEFF07F8007C7FF03 Ast
    gl_Position.w = temp_203;
    // 0x000898: 0x4C58100C01F70808 Fadd
    temp_205 = temp_197 + vp_c3.data[7].w;
    // 0x0008A8: 0xEFF07F800787FF05 Ast
    gl_Position.z = temp_204;
    // 0x0008B0: 0xEFF07F800707FF08 Ast
    gl_Position.x = temp_205;
    // 0x0008B8: 0xE30000000007000F Exit
    return;
}
