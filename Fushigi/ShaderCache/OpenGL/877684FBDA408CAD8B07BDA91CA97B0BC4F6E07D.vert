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
layout (location = 8) out vec4 out_attr8;
layout (location = 9) out vec4 out_attr9;


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
    int temp_29;
    uint temp_30;
    uint temp_31;
    int temp_32;
    precise float temp_33;
    int temp_34;
    uint temp_35;
    int temp_36;
    precise float temp_37;
    int temp_38;
    uint temp_39;
    uint temp_40;
    int temp_41;
    precise float temp_42;
    int temp_43;
    uint temp_44;
    int temp_45;
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
    // 0x000008: 0x4C98079400A70002 Mov
    // 0x000010: 0xEFD87F800807FF13 Ald
    temp_0 = in_attr0.x;
    // 0x000018: 0x4CB0119002371A00 F2i
    temp_1 = trunc(vp_c4.data[8].w);
    temp_2 = int(temp_1);
    // 0x000028: 0x4C98079400B7000A Mov
    // 0x000030: 0xEFD87F801047FF09 Ald
    temp_3 = in_attr8.y;
    // 0x000038: 0x4C9807940027000B Mov
    // 0x000048: 0xEFD87F800847FF06 Ald
    temp_4 = in_attr0.y;
    // 0x000050: 0x4C98079400370003 Mov
    // 0x000058: 0xEFD87F800A07FF19 Ald
    temp_5 = in_attr2.x;
    // 0x000068: 0x3848000000470012 Shl
    temp_6 = temp_2 << 4;
    // 0x000070: 0xEFD87F800887FF11 Ald
    temp_7 = in_attr0.z;
    // 0x000078: 0x4C68101000071307 Fmul
    temp_8 = temp_0 * vp_c4.data[0].x;
    // 0x000088: 0xEFD87F800A47FF08 Ald
    temp_9 = in_attr2.y;
    // 0x000090: 0x4C6810100047130D Fmul
    temp_10 = temp_0 * vp_c4.data[1].x;
    // 0x000098: 0xEFD87F800907FF10 Ald
    temp_11 = in_attr1.x;
    // 0x0000A8: 0x4C68101000871313 Fmul
    temp_12 = temp_0 * vp_c4.data[2].x;
    // 0x0000B0: 0xEFD87F800947FF0F Ald
    temp_13 = in_attr1.y;
    // 0x0000B8: 0xEF94007068871204 Ldc
    temp_14 = temp_6 + 0x688;
    temp_15 = uint(temp_14) >> 2;
    temp_16 = temp_15 >> 2;
    temp_17 = int(temp_15) & 3;
    temp_18 = vp_c7.data[int(temp_16)][temp_17];
    // 0x0000C8: 0xEF9400704887120E Ldc
    temp_19 = temp_6 + 0x488;
    temp_20 = uint(temp_19) >> 2;
    temp_21 = temp_20 >> 2;
    temp_22 = int(temp_20) & 3;
    temp_23 = vp_c7.data[int(temp_21)][temp_22];
    // 0x0000D0: 0x51A0011400C70905 Ffma
    temp_24 = fma(temp_3, vp_c5.data[2].z, vp_c5.data[3].x);
    // 0x0000D8: 0xEFD87F801007FF0C Ald
    temp_25 = in_attr8.x;
    // 0x0000E8: 0x51A0051400D7090A Ffma
    temp_26 = fma(temp_3, vp_c5.data[2].w, vp_c5.data[3].y);
    // 0x0000F0: 0x51A005940047090B Ffma
    temp_27 = fma(temp_3, vp_c5.data[0].z, vp_c5.data[1].x);
    // 0x0000F8: 0x51A0019400570909 Ffma
    temp_28 = fma(temp_3, vp_c5.data[0].w, vp_c5.data[1].y);
    // 0x000108: 0xEF95007068071200 Ldc
    temp_29 = temp_6 + 0x680;
    temp_30 = uint(temp_29) >> 2;
    temp_31 = temp_30 >> 2;
    temp_32 = int(temp_30) & 3;
    temp_33 = vp_c7.data[int(temp_31)][temp_32];
    temp_34 = int(temp_30) + 1;
    temp_35 = uint(temp_34) >> 2;
    temp_36 = temp_34 & 3;
    temp_37 = vp_c7.data[int(temp_35)][temp_36];
    // 0x000110: 0xEF95007048071202 Ldc
    temp_38 = temp_6 + 0x480;
    temp_39 = uint(temp_38) >> 2;
    temp_40 = temp_39 >> 2;
    temp_41 = int(temp_39) & 3;
    temp_42 = vp_c7.data[int(temp_40)][temp_41];
    temp_43 = int(temp_39) + 1;
    temp_44 = uint(temp_43) >> 2;
    temp_45 = temp_43 & 3;
    temp_46 = vp_c7.data[int(temp_44)][temp_45];
    // 0x000118: 0x49A0099000970616 Ffma
    temp_47 = fma(temp_4, vp_c4.data[2].y, temp_12);
    // 0x000128: 0x49A0039000170613 Ffma
    temp_48 = fma(temp_4, vp_c4.data[0].y, temp_8);
    // 0x000130: 0x49A0069000570614 Ffma
    temp_49 = fma(temp_4, vp_c4.data[1].y, temp_10);
    // 0x000138: 0xEFD87F800987FF0D Ald
    temp_50 = in_attr1.z;
    // 0x000148: 0x4C68101000071915 Fmul
    temp_51 = temp_5 * vp_c4.data[0].x;
    // 0x000150: 0x4C68101000871917 Fmul
    temp_52 = temp_5 * vp_c4.data[2].x;
    // 0x000158: 0x4C68101000471919 Fmul
    temp_53 = temp_5 * vp_c4.data[1].x;
    // 0x000168: 0x49A00B1000A71116 Ffma
    temp_54 = fma(temp_7, vp_c4.data[2].z, temp_47);
    // 0x000170: 0x49A0099000271112 Ffma
    temp_55 = fma(temp_7, vp_c4.data[0].z, temp_48);
    // 0x000178: 0x49A00A1000671114 Ffma
    temp_56 = fma(temp_7, vp_c4.data[1].z, temp_49);
    // 0x000188: 0xEFD87F800A87FF11 Ald
    temp_57 = in_attr2.z;
    // 0x000190: 0x49A00A9000170807 Ffma
    temp_58 = fma(temp_9, vp_c4.data[0].y, temp_51);
    // 0x000198: 0x49A00B9000970806 Ffma
    temp_59 = fma(temp_9, vp_c4.data[2].y, temp_52);
    // 0x0001A8: 0x49A00C9000570808 Ffma
    temp_60 = fma(temp_9, vp_c4.data[1].y, temp_53);
    // 0x0001B0: 0x4C58101000B71615 Fadd
    temp_61 = temp_54 + vp_c4.data[2].w;
    // 0x0001B8: 0x4C68101000071018 Fmul
    temp_62 = temp_11 * vp_c4.data[0].x;
    // 0x0001C8: 0x4C68101000871019 Fmul
    temp_63 = temp_11 * vp_c4.data[2].x;
    // 0x0001D0: 0x4C58101000771414 Fadd
    temp_64 = temp_56 + vp_c4.data[1].w;
    // 0x0001D8: 0x4C6810100047101A Fmul
    temp_65 = temp_11 * vp_c4.data[1].x;
    // 0x0001E8: 0x59A0020000E71504 Ffma
    temp_66 = fma(temp_61, temp_23, temp_18);
    // 0x0001F0: 0x4C58101000371215 Fadd
    temp_67 = temp_55 + vp_c4.data[0].w;
    // 0x0001F8: 0x49A00C1000170F10 Ffma
    temp_68 = fma(temp_13, vp_c4.data[0].y, temp_62);
    // 0x000208: 0x49A00C9000970F13 Ffma
    temp_69 = fma(temp_13, vp_c4.data[2].y, temp_63);
    // 0x000210: 0x49A00D1000570F0F Ffma
    temp_70 = fma(temp_13, vp_c4.data[1].y, temp_65);
    // 0x000218: 0x59A0008000371401 Ffma
    temp_71 = fma(temp_64, temp_46, temp_37);
    // 0x000228: 0x49A0059400070C14 Ffma
    temp_72 = fma(temp_25, vp_c5.data[0].x, temp_27);
    // 0x000230: 0x4C5810180BA7040B Fadd
    temp_73 = temp_66 + vp_c6.data[46].z;
    // 0x000238: 0x59A0000000271503 Ffma
    temp_74 = fma(temp_67, temp_42, temp_33);
    // 0x000248: 0x49A0081000270D00 Ffma
    temp_75 = fma(temp_50, vp_c4.data[0].z, temp_68);
    // 0x000250: 0x49A0099000A70D02 Ffma
    temp_76 = fma(temp_50, vp_c4.data[2].z, temp_69);
    // 0x000258: 0x49A0029400870C0E Ffma
    temp_77 = fma(temp_25, vp_c5.data[2].x, temp_24);
    // 0x000268: 0xEFD87F800AC7FF05 Ald
    temp_78 = in_attr2.w;
    // 0x000270: 0x49A0051400970C12 Ffma
    temp_79 = fma(temp_25, vp_c5.data[2].y, temp_26);
    // 0x000278: 0xEFF07F800E07FF14 Ast
    out_attr6.x = temp_72;
    // 0x000288: 0x49A0049400170C16 Ffma
    temp_80 = fma(temp_25, vp_c5.data[0].y, temp_28);
    // 0x000290: 0xEFF07F800E87FF0E Ast
    out_attr6.z = temp_77;
    // 0x000298: 0x49A0079000670D0D Ffma
    temp_81 = fma(temp_50, vp_c4.data[1].z, temp_70);
    // 0x0002A8: 0xEFF07F800D07FF03 Ast
    out_attr5.x = temp_74;
    // 0x0002B0: 0x4C5810180B97010A Fadd
    temp_82 = temp_71 + vp_c6.data[46].y;
    // 0x0002B8: 0xEFF07F800EC7FF12 Ast
    out_attr6.w = temp_79;
    // 0x0002C8: 0x4C6810180C270B0C Fmul
    temp_83 = temp_73 * vp_c6.data[48].z;
    // 0x0002D0: 0xEFF07F800D47FF01 Ast
    out_attr5.y = temp_71;
    // 0x0002D8: 0x4C6810180C670B0F Fmul
    temp_84 = temp_73 * vp_c6.data[49].z;
    // 0x0002E8: 0xEFF07F800E47FF16 Ast
    out_attr6.y = temp_80;
    // 0x0002F0: 0x4C6810180CA70B10 Fmul
    temp_85 = temp_73 * vp_c6.data[50].z;
    // 0x0002F8: 0xEFF07F800D87FF04 Ast
    out_attr5.z = temp_66;
    // 0x000308: 0x49A0039000271107 Ffma
    temp_86 = fma(temp_57, vp_c4.data[0].z, temp_58);
    // 0x000310: 0x4C5810180B870309 Fadd
    temp_87 = temp_74 + vp_c6.data[46].x;
    // 0x000318: 0x49A006180C170A0C Ffma
    temp_88 = fma(temp_82, vp_c6.data[48].y, temp_83);
    // 0x000328: 0x49A007980C570A0F Ffma
    temp_89 = fma(temp_82, vp_c6.data[49].y, temp_84);
    // 0x000330: 0x5C6810000007000B Fmul
    temp_90 = temp_75 * temp_75;
    // 0x000338: 0x49A008180C970A10 Ffma
    temp_91 = fma(temp_82, vp_c6.data[50].y, temp_85);
    // 0x000348: 0x49A0041000671108 Ffma
    temp_92 = fma(temp_57, vp_c4.data[1].z, temp_60);
    // 0x000350: 0x5C6810000077070A Fmul
    temp_93 = temp_86 * temp_86;
    // 0x000358: 0x49A0031000A71106 Ffma
    temp_94 = fma(temp_57, vp_c4.data[2].z, temp_59);
    // 0x000368: 0x49A006180C07090C Ffma
    temp_95 = fma(temp_87, vp_c6.data[48].x, temp_88);
    // 0x000370: 0x49A007980C470911 Ffma
    temp_96 = fma(temp_87, vp_c6.data[49].x, temp_89);
    // 0x000378: 0x49A008180C870910 Ffma
    temp_97 = fma(temp_87, vp_c6.data[50].x, temp_91);
    // 0x000388: 0x59A0058000D70D0B Ffma
    temp_98 = fma(temp_81, temp_81, temp_90);
    // 0x000390: 0x59A0050000870809 Ffma
    temp_99 = fma(temp_92, temp_92, temp_93);
    // 0x000398: 0x4C58300C02F7030E Fadd
    temp_100 = 0.0 - vp_c3.data[11].w;
    temp_101 = temp_74 + temp_100;
    // 0x0003A8: 0x4C6810180BB70C14 Fmul
    temp_102 = temp_95 * vp_c6.data[46].w;
    // 0x0003B0: 0xEFF07F800B07FF0E Ast
    out_attr3.x = temp_101;
    // 0x0003B8: 0x59A005800027020F Ffma
    temp_103 = fma(temp_76, temp_76, temp_98);
    // 0x0003C8: 0xEFF07F801107FF14 Ast
    out_attr9.x = temp_102;
    // 0x0003D0: 0x59A0048000670609 Ffma
    temp_104 = fma(temp_94, temp_94, temp_99);
    // 0x0003D8: 0x5080000000570F13 Mufu
    temp_105 = inversesqrt(temp_103);
    // 0x0003E8: 0x4C68100C0087030C Fmul
    temp_106 = temp_74 * vp_c3.data[2].x;
    // 0x0003F0: 0x5080000000570909 Mufu
    temp_107 = inversesqrt(temp_104);
    // 0x0003F8: 0x4C5830180B07030B Fadd
    temp_108 = 0.0 - vp_c6.data[44].x;
    temp_109 = temp_74 + temp_108;
    // 0x000408: 0x4C68100C0047030A Fmul
    temp_110 = temp_74 * vp_c3.data[1].x;
    // 0x000410: 0x4C68100C0007030E Fmul
    temp_111 = temp_74 * vp_c3.data[0].x;
    // 0x000418: 0x4C58300C03770415 Fadd
    temp_112 = 0.0 - vp_c3.data[13].w;
    temp_113 = temp_66 + temp_112;
    // 0x000428: 0x4C58300C03370112 Fadd
    temp_114 = 0.0 - vp_c3.data[12].w;
    temp_115 = temp_71 + temp_114;
    // 0x000430: 0xEFF07F800B87FF15 Ast
    out_attr3.z = temp_113;
    // 0x000438: 0x49A0060C0097010F Ffma
    temp_116 = fma(temp_71, vp_c3.data[2].y, temp_106);
    // 0x000448: 0xEFF07F800B47FF12 Ast
    out_attr3.y = temp_115;
    // 0x000450: 0x5C6810000137020C Fmul
    temp_117 = temp_76 * temp_105;
    // 0x000458: 0x5C68100000970803 Fmul
    temp_118 = temp_92 * temp_107;
    // 0x000468: 0xEFF07F800887FF0C Ast
    out_attr0.z = temp_117;
    // 0x000470: 0x4C68101803870B14 Fmul
    temp_119 = temp_109 * vp_c6.data[14].x;
    // 0x000478: 0xEFF07F800947FF03 Ast
    out_attr1.y = temp_118;
    // 0x000488: 0x49A0050C0057010B Ffma
    temp_120 = fma(temp_71, vp_c3.data[1].y, temp_110);
    // 0x000490: 0x4C6810180BB71115 Fmul
    temp_121 = temp_96 * vp_c6.data[46].w;
    // 0x000498: 0x4C5810100207040A Fadd
    temp_122 = temp_66 + vp_c4.data[8].x;
    // 0x0004A8: 0xEFF07F801147FF15 Ast
    out_attr9.y = temp_121;
    // 0x0004B0: 0x5C68100001370D0D Fmul
    temp_123 = temp_81 * temp_105;
    // 0x0004B8: 0x5C68100000970606 Fmul
    temp_124 = temp_94 * temp_107;
    // 0x0004C8: 0xEFF07F800847FF0D Ast
    out_attr0.y = temp_123;
    // 0x0004D0: 0x5C68100000C70308 Fmul
    temp_125 = temp_118 * temp_117;
    // 0x0004D8: 0xEFF07F800987FF06 Ast
    out_attr1.z = temp_124;
    // 0x0004E8: 0x49A0070C00170111 Ffma
    temp_126 = fma(temp_71, vp_c3.data[0].y, temp_111);
    // 0x0004F0: 0x5C68100001370000 Fmul
    temp_127 = temp_75 * temp_105;
    // 0x0004F8: 0x5C68100000970707 Fmul
    temp_128 = temp_86 * temp_107;
    // 0x000508: 0xEFF07F800807FF00 Ast
    out_attr0.x = temp_127;
    // 0x000510: 0x4C5830180B170112 Fadd
    temp_129 = 0.0 - vp_c6.data[44].y;
    temp_130 = temp_71 + temp_129;
    // 0x000518: 0xEFF07F800907FF07 Ast
    out_attr1.x = temp_128;
    // 0x000528: 0x49A0058C00670A02 Ffma
    temp_131 = fma(temp_122, vp_c3.data[1].z, temp_120);
    // 0x000530: 0x49A0078C00A70A01 Ffma
    temp_132 = fma(temp_122, vp_c3.data[2].z, temp_116);
    // 0x000538: 0x59A2040000D70608 Ffma
    temp_133 = 0.0 - temp_125;
    temp_134 = fma(temp_124, temp_123, temp_133);
    // 0x000548: 0x49A0088C00270A0A Ffma
    temp_135 = fma(temp_122, vp_c3.data[0].z, temp_126);
    // 0x000550: 0x5C68100000070609 Fmul
    temp_136 = temp_124 * temp_127;
    // 0x000558: 0x5C68100000D7070D Fmul
    temp_137 = temp_128 * temp_123;
    // 0x000568: 0x49A0088C00270411 Ffma
    temp_138 = fma(temp_66, vp_c3.data[0].z, temp_126);
    // 0x000570: 0x49A0058C0067040E Ffma
    temp_139 = fma(temp_66, vp_c3.data[1].z, temp_120);
    // 0x000578: 0x4C6810180BB71016 Fmul
    temp_140 = temp_97 * vp_c6.data[46].w;
    // 0x000588: 0x4C58100C00370A0A Fadd
    temp_141 = temp_135 + vp_c3.data[0].w;
    // 0x000590: 0xEFF07F801187FF16 Ast
    out_attr9.z = temp_140;
    // 0x000598: 0x59A2048000C7070B Ffma
    temp_142 = 0.0 - temp_136;
    temp_143 = fma(temp_128, temp_117, temp_142);
    // 0x0005A8: 0x59A2068000070306 Ffma
    temp_144 = 0.0 - temp_137;
    temp_145 = fma(temp_118, temp_127, temp_144);
    // 0x0005B0: 0x4C58100C00371111 Fadd
    temp_146 = temp_138 + vp_c3.data[0].w;
    // 0x0005B8: 0x4C5830180B270410 Fadd
    temp_147 = 0.0 - vp_c6.data[44].z;
    temp_148 = temp_66 + temp_147;
    // 0x0005C8: 0x49A0078C00A7040F Ffma
    temp_149 = fma(temp_66, vp_c3.data[2].z, temp_116);
    // 0x0005D0: 0x4C58100C00770202 Fadd
    temp_150 = temp_131 + vp_c3.data[1].w;
    // 0x0005D8: 0x4C68100C02070A04 Fmul
    temp_151 = temp_141 * vp_c3.data[8].x;
    // 0x0005E8: 0x5C68100000570808 Fmul
    temp_152 = temp_134 * temp_78;
    // 0x0005F0: 0x4C68100C02870A00 Fmul
    temp_153 = temp_141 * vp_c3.data[10].x;
    // 0x0005F8: 0xEFF07F800A07FF08 Ast
    out_attr2.x = temp_152;
    // 0x000608: 0x5C68100000570B0B Fmul
    temp_154 = temp_143 * temp_78;
    // 0x000610: 0x4C68100C02470A03 Fmul
    temp_155 = temp_141 * vp_c3.data[9].x;
    // 0x000618: 0xEFF07F800A47FF0B Ast
    out_attr2.y = temp_154;
    // 0x000628: 0x5C68100000570606 Fmul
    temp_156 = temp_145 * temp_78;
    // 0x000630: 0x4C58100C00770E0E Fadd
    temp_157 = temp_139 + vp_c3.data[1].w;
    // 0x000638: 0xEFF07F800A87FF06 Ast
    out_attr2.z = temp_156;
    // 0x000648: 0x4C68101802C71111 Fmul
    temp_158 = temp_146 * vp_c6.data[11].x;
    // 0x000650: 0x4C68100C01C70A05 Fmul
    temp_159 = temp_141 * vp_c3.data[7].x;
    // 0x000658: 0x49A0020C02170204 Ffma
    temp_160 = fma(temp_150, vp_c3.data[8].y, temp_151);
    // 0x000668: 0x49A0000C02970200 Ffma
    temp_161 = fma(temp_150, vp_c3.data[10].y, temp_153);
    // 0x000670: 0x49A0018C02570203 Ffma
    temp_162 = fma(temp_150, vp_c3.data[9].y, temp_155);
    // 0x000678: 0x49A00A1803971212 Ffma
    temp_163 = fma(temp_130, vp_c6.data[14].y, temp_119);
    // 0x000688: 0x4C58100C00B70F0F Fadd
    temp_164 = temp_149 + vp_c3.data[2].w;
    // 0x000690: 0x49A0089802D70E0E Ffma
    temp_165 = fma(temp_157, vp_c6.data[11].y, temp_158);
    // 0x000698: 0xEFF07F800C87FF0F Ast
    out_attr4.z = temp_164;
    // 0x0006A8: 0x4C58100C00B70101 Fadd
    temp_166 = temp_132 + vp_c3.data[2].w;
    // 0x0006B0: 0x49A0028C01D70202 Ffma
    temp_167 = fma(temp_150, vp_c3.data[7].y, temp_159);
    // 0x0006B8: 0x49A0091803A71010 Ffma
    temp_168 = fma(temp_148, vp_c6.data[14].z, temp_163);
    // 0x0006C8: 0x4C98079803C70009 Mov
    // 0x0006D0: 0x4C98079803070007 Mov
    // 0x0006D8: 0x49A0071802E70F0E Ffma
    temp_169 = fma(temp_164, vp_c6.data[11].z, temp_165);
    // 0x0006E8: 0x49A0020C02270104 Ffma
    temp_170 = fma(temp_166, vp_c3.data[8].z, temp_160);
    // 0x0006F0: 0x49A0000C02A70100 Ffma
    temp_171 = fma(temp_166, vp_c3.data[10].z, temp_161);
    // 0x0006F8: 0x49A0018C02670103 Ffma
    temp_172 = fma(temp_166, vp_c3.data[9].z, temp_162);
    // 0x000708: 0x49A0010C01E70102 Ffma
    temp_173 = fma(temp_166, vp_c3.data[7].z, temp_167);
    // 0x000710: 0x51A0049803B71010 Ffma
    temp_174 = fma(temp_168, vp_c6.data[15].x, vp_c6.data[14].w);
    // 0x000718: 0x51A0039802F70E0E Ffma
    temp_175 = fma(temp_169, vp_c6.data[12].x, vp_c6.data[11].w);
    // 0x000728: 0xEFF07F801047FF10 Ast
    out_attr8.y = temp_174;
    // 0x000730: 0x4C58100C02370404 Fadd
    temp_176 = temp_170 + vp_c3.data[8].w;
    // 0x000738: 0xEFF07F801007FF0E Ast
    out_attr8.x = temp_175;
    // 0x000748: 0x4C58100C02B70000 Fadd
    temp_177 = temp_171 + vp_c3.data[10].w;
    // 0x000750: 0xEFF07F800747FF04 Ast
    gl_Position.y = temp_176;
    // 0x000758: 0x4C58100C02770303 Fadd
    temp_178 = temp_172 + vp_c3.data[9].w;
    // 0x000768: 0xEFF07F8007C7FF00 Ast
    gl_Position.w = temp_177;
    // 0x000770: 0x4C58100C01F70202 Fadd
    temp_179 = temp_173 + vp_c3.data[7].w;
    // 0x000778: 0xEFF07F800787FF03 Ast
    gl_Position.z = temp_178;
    // 0x000788: 0xEFF07F800707FF02 Ast
    gl_Position.x = temp_179;
    // 0x000790: 0xE30000000007000F Exit
    return;
}
